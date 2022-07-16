# grex  ---  Growth-curve Explorer

Up to shifts and scaling, many growth curve and probability distribution functions having a closed form are special cases of
$y = \varphi[\varphi(t, b), a]$,
where $\varphi(x, \lambda) = (1 + \lambda x)^{1/\lambda}$ if $\lambda \ne 0$,
$\varphi(x, 0) = \exp(-x)$, and $a \le 1$ and $b \le 1$ are shape parameters. 

The *Growth-curve Explorer* is a visualization of this unifying equation. The original version is a Java applet described by García (2008), and available at http://forestgrowth.unbc.ca/grex/. Unfortunately, modern web browsers have dropped support for Java applets. Here are two alternatives:

1. A translation of the applet into JavaScript by [CheerpJ](https://leaningtech.com/pages/cheerpj.htm). The code is in folder *docs* in this repository, and the app can be accessed at https://ogarciav.github.io/grex/ (be patient, loading can take a while). The original documentation has been slightly edited.

2. A re-implementation as an *R Shiny* app, in folder *shiny*. The app can be run on https://oscargarcia.shinyapps.io/grex/.

A third possibility is to run the Java applet from the original [web site](http://forestgrowth.unbc.ca/grex/) with the CheerpJ Chrome browser [plugin](https://chrome.google.com/webstore/detail/cheerpj-applet-runner/bbmolahhldcbngedljfadjlognfaaein).

For completeness, the old Java code is in folder *original*, including a stand-alone Java app.  All the code in this repository is in the public domain.

The [resde](https://github.com/ogarciav/resde) *R* package includes the unifying model as function *unitran()*, and implements some estimation methods.

#### References

* Chakraborty, B., Bhowmick, A. R., Chattopadhyay, J. and Bhattacharya, S. (2019).
"A novel unification method to characterize a broad class of growth curve models using relative growth rate". _Bulletin of Mathematical Biology 81_, 2529-2552
[DOI](https://doi.org/10.1007/s11538-019-00617-w).

* García, O.  (2005). "Unifying sigmoid
univariate growth equations". _Forest Biometry,
Modelling and Information Sciences 1_, 63-68  [link](https://www.researchgate.net/publication/228432882").

* García, O.  (2008). "Visualization
of a general family of growth functions and probability distributions --- The Growth-curve Explorer". _Environmental
Modelling and Software 23_ (12), 1474-1475  [DOI](https://doi.org/10.1016/j.envsoft.2008.04.005).
