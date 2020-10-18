/*  grex.java ---  Growth-curve Explorer
*
*   Author:  Oscar Garcia, University of Northern British Columbia
*     garcia@unbc.ca  -  http://forestgrowth.unbc.ca/grex
*
*   Purpose:  Demonstrate a general family of growth curves (and
*     probability distributions) described in: Garcia, O. "Unifying sigmoid
*     univariate growth equations", FBMIS 1, 63-68, 2005 (www.fbmis.info).  The
*     growth-curve equation is  y = B^-1[B^-1(t,b),a], where B is the negative
*     Box-Cox transformation B(x,c) = (1 - x^c)/c if c not 0, B(x,0) = - ln x.
*
*   Usage:  Click or drag on the parameters area.  Checkboxes: "Reverse"
*     reverses the axes; "Auto" reverses as needed to get a sigmoid if possible;
*     "Density" displays the probability density  (dy/dt over t).
*
*   Methods:  Absolute pixel addressing is used for display.  The parameters
*     diagram was scaled to have 1 pixel per 0.01 parameter units.  We plot
*     t = B[B(y,a),b] and dy/dt for fixed values of y between 0 and 1.  An
*     optional applet parameter makes the y-values either uniformly spaced, or
*     to have closer spacing toward the ends of the y-axis following a logistic
*     mapping 6x(1-x)(default).  At asymptotes the curves are cut-off at
*     specified percentages from the y-axis ends.
*
*	Applet optional parameters:
*     NPOINTS: maximum number of points to be plotted (default 20).
*     CUTOFF: (integer) percentage of y for asymptote cut-off (default 3).
*     MAPPING: "uniform" for uniform y-spacing, otherwise logistic mapping.
*
*   Size: height 640, width 610.  The graphs height could be changed in the
*     variable graphHeight, below (default 150 pixels).
*
*   For compatibility with older Java VM's, compile as
*     "javac -source 1.3 -g:none grex.java".
*
*   License:  Public Domain.
*
*   Last revision:  5 December 2007.
*/ 


import java.applet.*;
import java.text.*;
import java.io.*;
import java.net.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.*;
import java.awt.font.*;
import javax.swing.event.*; 
import javax.imageio.*;


public class grex extends Applet implements MouseInputListener, ItemListener {

    public String getAppletInfo() {
        return "GREX - Growth-curve Explorer, by Oscar Garcia, UNBC";
    }
    
    public String[][] getParameterInfo() {
        String[][] info = {
          //  Parameter   Type       Description
            {"NPOINTS",  "int",     "number of points to plot (default 20)"},
            {"CUTOFF",   "int",     "% of y for asymptote cut-off (default 3)"},
            {"MAPPING",  "string",  "y-spacing 'uniform'|'logistic' (default)"},
        };
        return info;
    }


    // Global constants (pixel units)
    final static int graphHeight = 150;  // Graph size, can be changed here 
    final static int gGraphWidth = graphHeight;  // growth graph width
    final static int top = 15;  // top margin, above graphs (contains "y" label)
    final static int bottom = 21;  // space between graphs and image
    final static int imgTop = top + graphHeight + bottom - 1;  // top of image
    final static int imgHeight = 454;  // image dimensiona
    final static int imgWidth = 610;
    final static int yorg = top + graphHeight - 1;  // origin of y-axis
    final static int ylen = 1 - graphHeight;  // length of y-axis (negative)
    final static int torg = gGraphWidth - 1;  // origin of t-axis
    final static int tlen = imgWidth - gGraphWidth - 1;  // length of t-axis
    final static int gorg = torg;  // origin of dy/dt (y', growth) axis
    final static int glen = 1 - gGraphWidth;  // length of growth axis (negative)
    final static int xmin = 90;  // bounds of parameters area in image
    final static int xmax = 491;
    final static int ymin = imgTop + 69;
    final static int ymax = imgTop + 369;
    final static int brdr = 10;  // allowable border beyond parameters arrea
    final static Rectangle range = new Rectangle(xmin-brdr, ymin-brdr,
        xmax-xmin+2*brdr, ymax-ymin+2*brdr);  // allowable mouse input
    final static Rectangle aspace = new Rectangle(312, imgTop + imgHeight - 16,
        60, 15);  // a-parameter display location
    final static Rectangle bspace = new Rectangle(0, imgTop + 238,
        60, 15);  // b-parameter display location
    final static Rectangle chkbxs = new Rectangle(0, imgTop+10,
        250, 50);  // where to place checkboxes
            
    // Global variables
    int a100 = -50;  // parameter a times 100
    int b100 = -50;  // parameter b times 100
    boolean reverse = false;  // reverse axes
    boolean auto = true;  // automatic axes reversal for sigmoid
    boolean density = false;  // display probability density?
    Checkbox cbReverse;  // checkboxes
    Checkbox cbAuto;
    Checkbox cbDensity;
    Label aLabel = new Label();  // labels to contain parameter values
    Label bLabel = new Label();
    double[] y, t, g;  // y, t, and growth (dy/dt) values for graphs
    int[] y_px, yt_px, yg_px,t_px, g_px;  // same, in pixels
    int npoints = 20;  // number of points in graphs (default)
    int lastpt = npoints - 1;  // index of last point
	int nskip;  // number of points to skip near asymptotes
  	BufferedImage img = null;  // to contain parameters diagram
//    Image img;  // alternative, does not seem to work

    // Checking for valid numbers
    static boolean notFinite(double x) {
        return (Double.isInfinite(x) || Double.isNaN(x));
    }


    // Choose y-coordinate for point i
    double yPosition(int i, int npoints, int maptype) {
        double y = (double) i / (npoints - 1);
        switch (maptype) {
            case 0:   // uniform spacing
                return y;
            case 1:  // closer spacing toward the ends
            default:
                return y * y * (3 - 2 * y);  // integral of logistic 6x(1-x)
        }
    }


    // Initialize        
    public void init() {
		// Get applet parameters, if any
		// Number of points to calculate (default in global declaration)
	    String parameter = getParameter("NPOINTS");
	    if (parameter != null) {
		    try {
		        npoints = Integer.parseInt(parameter);
		    } catch (NumberFormatException e) {
		        // use default.
		    }
			lastpt = npoints - 1;
		}  // else use default
		//  Allocate arrays
		y= new double[npoints];  // y values for graphs
		t = new double[npoints];  // t values
		g = new double[npoints];  // growth (dy/dt) values
		y_px = new int[npoints];  // same, in pixels
		yt_px = new int[npoints];
		yg_px = new int[npoints];
		t_px = new int[npoints];
		g_px = new int[npoints];
		// Type of y spacing, used by yPositions()
		int maptype = 1;  // default is logistic mapping
		parameter = getParameter("SPACING");
		if (parameter != null && parameter.equalsIgnoreCase("uniform")) {
			maptype = 0;  // only other option
		}
		// End cutoff for asymptotes, % of y
		int cutoff = 3;  // default
	    parameter = getParameter("CUTOFF");
	    if (parameter != null) {
		    try {
		        cutoff = Integer.parseInt(parameter);
		    } catch (NumberFormatException e) {
		        // use default.
		    }
		}  // else use default
        // y-values for graphs.  Calculate pixels first for better accuracy
	    for (int i = 0; i < npoints; i++) {
	    	y_px[i] = yorg + (int) Math.round(ylen *
	    	    yPosition(i, npoints, 1));  // y for point i, in pixels
	    	y[i] = (y_px[i] - yorg) / (double) ylen;  // in [0, 1]
			if (100 * y[i] < cutoff) {
				nskip = i+1;  // do not plot when at asymptote (global)
			}
	    }
		if (nskip < 1) nskip = 1;  // make sure to skip infinite
		// Interface
	    addMouseListener(this);
	    addMouseMotionListener(this);
        this.setBackground(Color.white);
	    this.setFont(new Font("monospaced", Font.PLAIN, 12));  // default is ugly!
    	// Load image (parameters graph from Garcia 2005)
        try {
	        img = ImageIO.read(new URL(getCodeBase(), "grex.png"));
	    } catch (IOException e) {
		}
//      img = getImage(getClass().getResource("grex.png")); // does not work?
        // Checkboxes
	    cbReverse = new Checkbox("Reverse", reverse);
	    cbReverse.addItemListener(this);
	    cbReverse.setFocusable(false);  // suppress highlight
	    cbAuto = new Checkbox("Auto", auto);
	    cbAuto.addItemListener(this);
	    cbAuto.setFocusable(false);
	    cbDensity = new Checkbox("Density", density);
	    cbDensity.addItemListener(this);
	    cbDensity.setFocusable(false);
	    // Place into a panel
	    Panel pnl = new Panel();
	    pnl.setBounds(chkbxs);
	    pnl.add(cbReverse);    
	    pnl.add(cbAuto);    
	    pnl.add(cbDensity);
	    pnl.addMouseListener(this);
	    setLayout(null);
	    add(pnl);    
	    // Parameter labels
	    aLabel.setBounds(aspace);
	    bLabel.setBounds(bspace);
	    aLabel.setForeground(Color.red);
	    bLabel.setForeground(Color.red);
	    add(aLabel);
	    add(bLabel);
    }


    // First time display    
    public void paint (Graphics grph) {
        // Graph labels
	    grph.drawString("y", torg - 3, top - 5);
	    grph.drawString("dy/dt", gorg + glen/2 - 14, yorg + 13);
   	    grph.drawString("t", torg + tlen/2, yorg + 13);
        // Parameters diagram
	    grph.drawImage(img, 0, imgTop, this);
	    // Draw the rest
	    update(grph);
    }


    // A checkbox has changed
    public void itemStateChanged(ItemEvent e) {
		Object source = e.getItemSelectable();
		boolean status = (e.getStateChange() != ItemEvent.DESELECTED);
		if (source == cbReverse) {
			reverse = status;
		} else if (source == cbAuto) {
			auto = status;
		} else if (source == cbDensity) {
			density = status;
		}
		repaint();
	}    


    // Mouse click
 	public void mousePressed(MouseEvent event) {
 		int x = event.getX();  // get mouse coordinates (in pixels)
 		int y = event.getY();
 		if(range.contains(x, y)) {  // within allowed parameters range
         	int anew = (int) Math.round(100 * ((x-xmin)*4.0/(xmax-xmin)-3));
         	int bnew = (int) Math.round(100 * ((ymax-y)*3.0/(ymax-ymin)-2));
         	if (anew != a100 || bnew != b100) {  // new parameters
         		if (auto) {  // try to get a sigmoid (upper asymptote)
         			reverse = (bnew > 0) || (bnew == 0 && b100 > 0 && anew <= 0);
			 	    cbReverse.setState(reverse);
        		}
         		a100 = anew;  // update parameters
         		b100 = bnew;
 				repaint();  // update graphics
 			}
         }
 	}


    // Mouse dragged 
 	public void mouseDragged(MouseEvent event) {
 		mousePressed(event);  // same as above
 	}


	// Keep the compiler happy:
	public void mouseClicked(MouseEvent event) {}
	public void mouseReleased(MouseEvent event) {}
	public void mouseEntered(MouseEvent event) {}
	public void mouseExited(MouseEvent event) {}
	public void mouseMoved(MouseEvent event) {}


	// Called by repaint() when invoked from our code
    public void update(Graphics grph){
    	// Calculate growth and yield points
    	double gScale = glen / gVector(npoints, y, a100, b100, g);
    	tVector(npoints, y, a100, b100, t);
    	// End points for plotting
    	int tfirst = 0;
    	if (notFinite(t[0])) tfirst = nskip;
    	int gfirst = 0;
    	if (notFinite(g[0])) gfirst = nskip;
    	int tlast = lastpt;
    	if (notFinite(t[lastpt])) tlast = lastpt - nskip;
    	int glast = lastpt;
    	if (notFinite(g[lastpt])) glast = lastpt - nskip;
    	// Leave space on the right if no upper asymptote
    	int rgap = 0;
    	if ((!reverse && tlast == lastpt) || (reverse && tfirst == 0)) {
    		rgap = 15;
    	}
    	// Start away from y-axis if not through origin
    	int lgap = 0;
    	if ((!reverse && tfirst > 0) || (reverse && tlast < lastpt)) {
    		lgap = 15;
    	}
    	double tScale = (tlen - lgap - rgap) / (t[tlast] - t[tfirst]);
    	// Convert to pixels, shifting indices if first value is not valid
    	if (!reverse) {
	    	for (int i = tfirst, j = 0; i <= tlast; i++, j++) {
	    		t_px[j] = torg + lgap + (int) Math.round(tScale * (t[i] - t[tfirst])); 
	    		yt_px[j] = y_px[i];
	    	}
	    	for (int i = gfirst, j = 0; i <= glast; i++, j++) {
	    		g_px[j] = gorg + (int) Math.round(gScale * g[i]);
	    		yg_px[j] = y_px[i];
	    	}
	    } else {
	    	for (int i = tlast, j = 0; i >= tfirst; i--, j++) {
	    		t_px[j] = torg + lgap + (int) Math.round(tScale * (t[tlast] - t[i])); 
	    		yt_px[j] = y_px[lastpt - i];
	    	}
	    	for (int i = glast, j = 0; i >= gfirst; i--, j++) {
	    		g_px[j] = gorg + (int) Math.round(gScale * g[i]);
	    		yg_px[j] = y_px[lastpt - i];
	    	}
	    }
    	// Clear graphs, and draw axes
		grph.clearRect(0, top - 1, imgWidth, graphHeight + 1);
	    grph.drawLine(torg, yorg, torg, yorg + ylen);
		grph.drawLine(0, yorg, imgWidth - 1, yorg);
    	grph.setColor(Color.lightGray);
		grph.drawLine(0, yorg + ylen, imgWidth - 1, yorg + ylen);
    	// Plot yield and growth curves
    	grph.setColor(Color.red);
    	grph.drawPolyline(t_px, yt_px, tlast - tfirst + 1);
    	grph.drawPolyline(g_px, yg_px, glast - gfirst + 1);
    	// Plot probability density, if requested
    	if (density) {
    		// Fix inconsistent end points
    		int n = Math.min(tlast, glast) - Math.max(tfirst, gfirst) + 1;
			if (!reverse) {
				if (tfirst < gfirst) {
				    System.arraycopy(t_px, gfirst - tfirst, t_px, 0, n);
				}
				if (tfirst > gfirst) {
				    System.arraycopy(g_px, tfirst - gfirst, g_px, 0, n);
				}
			} else {
				if (tlast < glast) {
				    System.arraycopy(g_px, glast - tlast, g_px, 0, n);
				}
				if (tlast > glast) {
				    System.arraycopy(t_px, tlast - glast, t_px, 0, n);
				}
			}
    		// Adjust for y-axis
    		for (int i=0; i < n; i++) {
    			g_px[i] += top;
    		}
    		// Plot
	    	grph.setColor(Color.blue);
	    	grph.drawPolyline(t_px, g_px, n);
    	}		
		// Update a and b values
    	aLabel.setText(fmt(0.01*a100));
    	bLabel.setText(fmt(0.01*b100));
  	}


    // Format parameter value for display  	
  	String fmt(double x) {
  		DecimalFormat f = new DecimalFormat("##.##");
  		return f.format(x);
  	}

  		
	// Negative of Box-Cox transformation
	double boxCox(double x, int c100) {
		if (c100 != 0)
			return (1 - Math.pow(x, c100/100.)) / (c100/100.);
		else
			return - Math.log(x);
	}

	
	// Inverse yield function, i.e., t for given y
	double tYield(double y, int a100, int b100) {
		return boxCox(boxCox(y, a100), b100);
	}
	

	// Growth function dy/dt
	double growth(double y, int a100, int b100) {
		double g = Math.pow(y, 1 - a100/100.) * Math.pow(boxCox(y, a100),
		    1 - b100/100.);
		if (Double.isNaN(g)) {    // corrections
		    if (a100*b100 < 10000) {
    		    g = 0;
        	} else if (a100*b100 == 10000) {
        	    g = Math.pow(-b100/100., 1-b100/100.);
        	}
        }
		return g;
	}
	

	// calculate t[] for y[]
	void tVector(int n, double[] y, int a100, int b100, double[] t) {
	for (int i = 0; i < n; i++) {
			t[i] = tYield(y[i], a100, b100);
		}
	}
	

	// calculate g[] (i.e., growth dy/dt)for y[], return maximum
	double gVector(int n, double[] y, int a100, int b100, double[] g) {
		double max = 0;
		for (int i = 0; i < n; i++) {
			g[i] = growth(y[i], a100, b100);
			if (!notFinite(g[i]) && g[i] > max) max = g[i];
		};
		return max;
	}
}    

