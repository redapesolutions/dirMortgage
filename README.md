# dirMortgage
Angular directive for calculating mortgage loans...

##### Disclaimer: I am not in support of Interest in any financial/commercial transactions

### How to use  


Basic Example
=============

```
<div dir-mortgage></div>

or

<dir:mortgage></dir:mortgage>

with extra attrs

<dir:mortgage dm-template-url="" dm-principal-amount="160000" dm-default-rate="2.5"></dir:mortgage>

Other usable attributes

dmTemplateUrl - template url
dmPrincipalAmount - prinicipal amount/mortgage amount
dmDefaultRate - default interest rate per annum
dmMinRate - minimum interest rate per annum
dmMaxRate - maximum interest rate per annum
dmMinYear - minimum year term
dmMaxYear - maximum year term
dmStepRate - defined increment pattern for interest rate values e.g. 0.5, 0.2, 1
dmStepYear - defined increment pattern of years increase, see values above
dmCurrency - set locale currency

```

Installation
============

```
var app = angular.module('yourAppName',['dirMortgage'])

```

Configs
=======
- Setting attributes could also be done through a provider

```
var app = angular.module('yourAppName',['dirMortgage']);
app.config(function(dirMortgageServiceProvider){
  dirMortgageServiceProvider.setTemplatePath('/path/to/template');

  //other usable provider setter functions
  .setMinYear(float number)
  .setMaxYear(float number)
  .setStepYear(float number)
  .setMinRate(float number)
  .setMaxRate(float number)
  .setStepRate(float number)
  .setDefaultRate(float number)
  .setDefaultPrincipalAmount(float number)
  .setCurrency(string)
});

```

