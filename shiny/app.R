library(shiny)

# Define UI for application
ui <- fluidPage(navbarPage("Growth Curve Explorer",
  # Application
  tabPanel("App",
  
  pre("                         y",
      style="background:none;border-style:none"),
  plotOutput("curvesPlot", width="610px", height="150px"),
  pre("        dy/dt                                  t",
      style="background:none;border-style:none"),
  
  imageOutput("img", width="610px", height="454px",
              hover=hoverOpts("img_hover", delayType="throttle", delay=100)),
  
  fluidRow(
    column(width=4,
           checkboxGroupInput("chkb",
                              label = NULL,
                              choices = c("Reverse"="r", "Auto"="a", "Density"="d"),
                              selected = c("a"),
                              inline = TRUE)
    ),
    column(width=4,
           textOutput("abdisp", inline=TRUE)
    )
  ),
  fluid=FALSE
),

tabPanel("Description",
        includeHTML("description.html")
        ),
tabPanel("More...",
        includeHTML("more.html")
        )
)
)



# Define server logic
server <- function(input, output) {
  # initialize
  y <- seq(0, 1, 0.05)
  y <- y^2*(3-2*y)
  n <- length(y)  # number of points
  tscale <- 2  # length of t-axis
  cutoff <- 3  # point of y for plotting limits if unbounded
  
  ab <- reactiveValues(a100=200, b100=0)  # parameters a and b * 100

  # Output image
  output$img <- renderImage({
    # Return a list containing information about the image
    list(
      src = "./www/grex.png",
      contentType = "image/png",
      width = 610,
      height = 454,
      alt = "GREX map"
    )
  }, deleteFile=FALSE)
  
  # Precess hover inputs  
  observe({
    clk <- input$img_hover
    if(!is.null(clk)){
      a100 <- round(clk$x - 390)
      b100 <- round(169 - clk$y)
      if(a100 >= -300 && a100 <= 100 && b100 >= -200 && b100 <= 100 &&
         (a100 != ab$a100 || b100 != ab$b100)){
        ab$a100 <- a100
        ab$b100 <- b100
      }
    }
  })
  
  # Process checkboxes
  chkbs <- reactive({
    c <- input$chkb
    # Convert logical reverse indicators to unitran format
    if("a" %in% c) rev <- "auto"
    else if("r" %in% c) rev <- "yes"
    else rev <- "no"
    return(list(rev = rev, dens = "d" %in% c))
  })
  
  # Display a and b values
  output$abdisp <- renderText({
    sprintf("a = %1.2f, b = %1.2f", ab$a100/100, ab$b100/100)
  })
  
  # Re-draw plots  
  output$curvesPlot <- renderPlot({
    par(mar=c(0,1,0,1))
    if(ab$a100 > 100){
      plot(0, xlim=0:1, ylim=0:1, type="n", axes=FALSE, xlab="", ylab="")
      text(0.5, 0.5, "Hover over the parameters map below", col="red", cex=2)
      return()
    }
    a <- ab$a100 / 100
    b <- ab$b100 / 100
    reverse=chkbs()$rev
    density=chkbs()$dens
    # Yield curve t(y)
    t <- unitran(y, a=a, b=b, reverse=reverse)
    if(is.finite(t[1]))  # adjust origin
      t <- t - t[1]
    else
      t <- t - t[cutoff]
    if(is.finite(t[n]))  # adjust scale
      t <- tscale * t / t[n]
    else
      t <- tscale * t / t[n + 1 - cutoff]
    # Growth rate curve dy/dt = g(y)
    g <- 1 / unitran_prime(y, a=a, b=b, reverse=reverse)
    d <- g / max(g[is.finite(g)])  # adjust scale, save density data
    g <- -d  # negative, for plotting to the left
    # Drop negatives
    if(t[1] < 0){
      p <- t >= 0
      t <- t[p]
      yp <- y[p]
      d <- d[p]
    } else yp <- y
    # Plot them
    plot(0, xlim=c(-1, tscale), ylim=c(0, 1), type="n", bty="n",
         xaxs="i", yaxs="i", axes=FALSE, xlab="", ylab="")
    segments(-1, 0, tscale, 0, lwd=4)  # x-axis
    segments(-1, 1, tscale, 1)  # asymptote
    segments(0, 0, 0, 1, lwd=2)  # y-axies
    lines(t, yp, col="red")  # yield
    lines(g, y, col="red")  # growth rate
    if (density) lines(t, d, col="blue")
  })
  
  # Functions used in plotting
  # Box-Cox
  bc <- function(y, lambda){
    if (abs(lambda) < 6e-9) log(y)
    else (y^lambda - 1) / lambda
  }
  # Unifiying transformation
  unitran <- function(x, a=NULL, b=NULL, reverse="auto")
  {
    if(identical(reverse, "auto")){
      if(b > 0) reverse <- "yes"
      else reverse <- "no"
    }
    switch(reverse,
           no = -bc(-bc(x, a), b),
           yes = bc(-bc(1 - x, a), b),
           stop("Bad 'reverse' value", call.=FALSE)
    )
  }
  # Derivative of unifying transformation
  unitran_prime <- function(x, a=NULL, b=NULL, reverse="auto")
  {
    if(identical(reverse, "auto")){
      if(b > 0) reverse <- "yes"
      else reverse <- "no"
    }
    switch(reverse,
           no = (-bc(x, a))^(b-1) * x^(a-1),
           yes = (-bc(1 - x, a))^(b-1) * (1-x)^(a-1),
           stop("Bad 'reverse' value", call.=FALSE)
    )
  }
}

# Run the application 
shinyApp(ui = ui, server = server)

