(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid px-0 m-0\">\r\n  <div class=\"row\">\r\n<div class=\"logo col-md-2\">\r\n\r\n    <span class=\"navbar-brand mb-0 h1\">\r\n    <img width=\"220\" src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS9IuIKAI-HB22yZPVGllaVx51GcxetrijiYPRQdyvjlejQNXnmiQ9VNxvNjcGQk5wIdiR1L-GK2522tMU9_u07dQ&usqp=CAU&ec=45690271\"/>\r\n    </span>\r\n</div>    \r\n<div class=\"col-md-6\">\r\n    \r\n    <h1 class=\"text-dark float-right display-3\">Fitness  App</h1>\r\n  \r\n</div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  \r\n<div class=\"col-md-12\">\r\n<nav class=\"navbar navbar-expand-md navbar-light bg-dark\">\r\n\r\n\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarCollapse\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n</button>\r\n\r\n  \r\n    <div class=\"collapse navbar-collapse\" id=\"navbarCollapse\">\r\n      <ul class=\"navbar-nav mr-auto\" >\r\n\r\n        <li class=\"nav-item mx-2\">\r\n          <button class=\"btn btn-info\" (click)=\"landingpage()\">Home</button>\r\n        </li>\r\n\r\n        <li class=\"nav-item mx-2\">\r\n          <button class=\"btn btn-info\" (click)=\"placeAppointment()\">Place Appointment</button>\r\n        </li>\r\n\r\n        <li class=\"nav-item mx-2\"> \r\n         <button class=\"btn btn-info\" (click)=\"viewAppointment()\">View Appointment</button>\r\n        </li>\r\n\r\n        <li class=\"nav-item mx-2\"> \r\n          <button class=\"btn btn-info\" >Search Appointment</button>\r\n         </li>\r\n\r\n        <li class=\"nav-item mx-2\">\r\n          <button class=\"btn btn-info\" (click)=\"contactUspage()\">Contact Us</button>\r\n        </li>\r\n        \r\n      </ul>\r\n    </div>\r\n\r\n  \r\n</nav>\r\n</div>\r\n</div>\r\n</div>\r\n<div class=\"sidebar\">\r\n  <div class=\"row\">\r\n    \r\n  <div class=\" col-md-2\">\r\n  <div class=\"container h-100  py-5 px-5\">\r\n\r\n    <div class=\"btn-group-vertical\">\r\n         \r\n      <button  class=\"btn btn-secondary btn-block\" (click)=\"landingpage()\">Home</button><br>\r\n    \r\n  \r\n      <button  class=\"btn btn-secondary btn-block\" (click)=\"placeAppointment()\">Place Appointment</button><br>\r\n    \r\n    \r\n      <button  class=\"btn btn-secondary btn-block\" (click)=\"viewAppointment()\">View Appointment</button><br>\r\n    \r\n      <button  class=\"btn btn-secondary btn-block\" >Search Appointment</button><br>\r\n    \r\n   \r\n      <button  class=\"btn btn-secondary btn-block\" (click)=\"contactUspage()\">Contact Us</button>\r\n  \r\n  </div>\r\n\r\n  \r\n</div>\r\n</div>\r\n\r\n<div class=\"col-12 col-sm-10\">\r\n<router-outlet></router-outlet>\r\n\r\n</div>\r\n  \r\n</div>\r\n \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-fluid\">\r\n<form [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" novalidate>\r\n    <label class=\"display-4\">Contact-Us</label>\r\n    <div class=\"row\">\r\n    <div class=\"form-group col-md-4\">\r\n        <label for=\"exampleInputfirstname\">First Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"firstname\" placeholder=\"First Name\">\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.firstname.touched && contactForm.controls.firstname.errors?.required\">\r\n            Please enter first name.!\r\n        </small>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-4\">\r\n        <label for=\"exampleInputlastname\">Last Name</label>\r\n        <input type=\"text\" class=\"form-control\" formControlName=\"lastname\" placeholder=\"Last Name\">\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.lastname.touched && contactForm.controls.lastname.errors?.required\">\r\n            Please enter last name.!\r\n        </small>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n    <div class=\"form-group col-md-8\">\r\n        <label for=\"exampleInputphonenumber\">Phone Number</label>\r\n        <input type=\"number\" class=\"form-control\" formControlName=\"phonenumber\" placeholder=\"Phone Number\">\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.phonenumber.touched && contactForm.controls.phonenumber.errors?.required\">\r\n            Please enter phone number.!\r\n        </small>\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"row\"> \r\n    <div class=\"form-group col-md-8\">\r\n        <label for=\"exampleInputemail\">Email</label>\r\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"Eamil\">\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.required\">\r\n            Please enter email.!\r\n        </small>\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\">\r\n            Enter the valid email .!\r\n        </small>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n    <div class=\"form-group col-md-8\">\r\n        <label for=\"exampleInputmessage\">Message</label>\r\n        <textarea type=\"text\" class=\"form-control\" formControlName=\"message\" placeholder=\"Message\"></textarea>\r\n        <small class=\"form-text text-muted\"\r\n            *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\">\r\n            Please enter message...!\r\n        </small>\r\n\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"row\"> \r\n<div class=\"col-md-12\">\r\n<button type=\"submit\" class=\"btn btn-primary btn-block col-md-8\" >Submit</button>\r\n</div>\r\n</div>\r\n</form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"introtext\">\r\n    <h1 class=\"display-3\">Intro text</h1>\r\n    <h3 class=\"display-5\">Fitness trainer website that allows the user to place appointment while entering your personal details , view and delete your fitness appointment with the instructor. and you can edit the appointment also. </h3>\r\n</div>\r\n<div>\r\n    <button class=\"btn btn-primary btn-lg\" (click)=\"navpage()\">Apply For Trainer</button>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container m-5\">\r\n  \r\n  <form\r\n    name=\"fitnessForm\"\r\n    (ngSubmit)=\"onSubmit()\"\r\n    [formGroup]=\"fitnessForm\"\r\n  >\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"first_name\">First Name</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        formControlName=\"firstname\"\r\n        id=\"first_name\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n            fitnessForm.get('firstname').touched &&\r\n            fitnessForm.get('firstname').invalid\r\n        }\"\r\n        autofocus\r\n      />\r\n\r\n      <div\r\n        *ngIf=\"\r\n          fitnessForm.get('firstname').touched &&\r\n          fitnessForm.get('firstname').invalid\r\n        \"\r\n        class=\"invalid-feedback\"\r\n      >\r\n        <div *ngIf=\"fitnessForm.get('firstname').errors.required\">\r\n          First Name is required\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('firstname').errors?.pattern\">\r\n          First Name should not contain number or symbol\r\n        </div>\r\n      </div>\r\n\r\n    \r\n    </div>\r\n\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"last_name\">Last Name</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        formControlName=\"lastname\"\r\n        id=\"last_name\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n            fitnessForm.get('lastname').touched &&\r\n            fitnessForm.get('lastname').invalid\r\n        }\"\r\n      />\r\n\r\n      <div\r\n        *ngIf=\"\r\n          fitnessForm.get('lastname').touched &&\r\n          fitnessForm.get('lastname').invalid\r\n        \"\r\n        class=\"invalid-feedback\"\r\n      >\r\n        <div *ngIf=\"fitnessForm.get('lastname').errors.required\">\r\n          Last Name is required\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('lastname').errors?.pattern\">\r\n          Last Name should not contain number or symbol\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n  \r\n    <div class=\"form-group col-md-8\">\r\n      <label for=\"email\">Email</label>\r\n      <input\r\n        type=\"text\"\r\n        class=\"form-control\"\r\n        formControlName=\"email\"\r\n        id=\"email\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n            fitnessForm.get('email').touched &&\r\n            fitnessForm.get('email').invalid\r\n        }\"\r\n      />\r\n\r\n      <div\r\n        *ngIf=\"\r\n          fitnessForm.get('email').touched &&\r\n          fitnessForm.get('email').invalid\r\n        \"\r\n        class=\"invalid-feedback\"\r\n      >\r\n        <div *ngIf=\"fitnessForm.get('email').errors.required\">\r\n          Email is required\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('email').errors?.pattern\">\r\n          Email is invalid \r\n        </div>\r\n      </div>\r\n\r\n      <small id=\"first_name_help\" class=\"form-text text-muted\"\r\n      >We'll never share your email with anyone else.</small\r\n    >\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"phonenumber\">Phone number</label>\r\n      <input\r\n        type=\"tel\"\r\n        class=\"form-control\"\r\n        formControlName=\"phonenumber\"\r\n        id=\"phonenumber\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n            fitnessForm.get('phonenumber').touched &&\r\n            fitnessForm.get('phonenumber').invalid\r\n        }\"\r\n      />\r\n\r\n      <div\r\n        *ngIf=\"\r\n          fitnessForm.get('phonenumber').touched &&\r\n          fitnessForm.get('phonenumber').invalid\r\n        \"\r\n        class=\"invalid-feedback\"\r\n      >\r\n        <div *ngIf=\"fitnessForm.get('phonenumber').errors.required\">\r\n          Phone number is required\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('phonenumber').errors?.pattern\">\r\n          Phone number should only contain number\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('phonenumber').errors?.min\">\r\n          Phone number should contain minimum 10 numbers\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('phonenumber').errors?.max\">\r\n          Phone number should contain maximum 10 numbers\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-2\">\r\n      <label for=\"age\">Age </label>\r\n      <input\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        formControlName=\"age\"\r\n        id=\"age\"\r\n        [ngClass]=\"{\r\n          'is-invalid':\r\n            fitnessForm.get('age').touched &&\r\n            fitnessForm.get('age').invalid\r\n        }\"\r\n      />\r\n\r\n      <div\r\n        *ngIf=\"\r\n          fitnessForm.get('age').touched &&\r\n          fitnessForm.get('age').invalid\r\n        \"\r\n        class=\"invalid-feedback\"\r\n      >\r\n        <div *ngIf=\"fitnessForm.get('age').errors.required\">\r\n          Age is required\r\n        </div>\r\n        <div *ngIf=\"fitnessForm.get('age').errors?.pattern\">\r\n          Age should only contain number\r\n        </div>\r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('age').errors?.min ||\r\n            fitnessForm.get('age').errors?.max\r\n          \"\r\n        >\r\n          Age must be between 19 to 59\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\"> \r\n\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"trainer\">Trainer preference </label>\r\n\r\n      <select\r\n        class=\"cutom-select\"\r\n        formControlName=\"trainerpreference\"\r\n        id=\"trainer\"\r\n        class=\"form-control\"\r\n      >\r\n        \r\n        <option value=\"male\" selected=\"true\">Male</option>\r\n        <option value=\"female\">Female</option>\r\n        <option value=\"other\">Other</option>\r\n      </select>\r\n    </div>\r\n\r\n \r\n\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"packages\">Package </label>\r\n\r\n      <select\r\n        class=\"cutom-select\"\r\n        formControlName=\"packages\"\r\n        id=\"packages\"\r\n        class=\"form-control\"\r\n      >\r\n        <option value=\"500\" selected=\"true\">Basic Package / 500rs </option>\r\n        <option value=\"1000\">Intermediate Package / 1000rs</option>\r\n        <option value=\"1500\">Advance Package / 2000rs</option>\r\n      </select>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"inr\">INR </label>\r\n\r\n      <input\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        formControlName=\"inr\"\r\n        id=\"inr\"\r\n        \r\n      />\r\n    </div>\r\n\r\n    <div class=\"form-group col-md-4\">\r\n      <label for=\"paisa\">Paisa </label>\r\n\r\n      <input\r\n        type=\"number\"\r\n        class=\"form-control\"\r\n        formControlName=\"paisa\"\r\n        id=\"paisa\"\r\n        \r\n      />\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-8\">\r\n        <fieldset>\r\n            <legend>Address</legend>\r\n\r\n            <input\r\n                    type=\"text\"\r\n                    placeholder=\"Type address\"\r\n                    class=\"form-control\"\r\n                    formControlName=\"streetaddress\"\r\n                    [ngClass]=\"{\r\n                      'is-invalid':\r\n                        fitnessForm.get('streetaddress').touched &&\r\n                        fitnessForm.get('streetaddress').invalid\r\n                    }\"\r\n                  />\r\n\r\n        </fieldset>\r\n        \r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('streetaddress').touched &&\r\n            fitnessForm.get('streetaddress').invalid\r\n          \"\r\n          class=\"invalid-feedback\"\r\n        >\r\n          <div *ngIf=\"fitnessForm.get('streetaddress').errors.required\">\r\n            Address is required\r\n          </div>\r\n\r\n\r\n        </div>\r\n        \r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"country\">Country </label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"country\"\r\n          id=\"country\"\r\n          [ngClass]=\"{\r\n            'is-invalid':\r\n              fitnessForm.get('country').touched &&\r\n              fitnessForm.get('country').invalid\r\n          }\"\r\n        />\r\n  \r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('country').touched &&\r\n            fitnessForm.get('country').invalid\r\n          \"\r\n          class=\"invalid-feedback\"\r\n        >\r\n          <div *ngIf=\"fitnessForm.get('country').errors.required\">\r\n            country is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n\r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"state\">State </label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"state\"\r\n          id=\"state\"\r\n          [ngClass]=\"{\r\n            'is-invalid':\r\n              fitnessForm.get('state').touched &&\r\n              fitnessForm.get('state').invalid\r\n          }\"\r\n        />\r\n  \r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('state').touched &&\r\n            fitnessForm.get('state').invalid\r\n          \"\r\n          class=\"invalid-feedback\"\r\n        >\r\n          <div *ngIf=\"fitnessForm.get('state').errors.required\">\r\n            state is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n            <div class=\"form-group col-md-4\">\r\n        <label for=\"city\">City </label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"city\"\r\n          id=\"city\"\r\n          [ngClass]=\"{\r\n            'is-invalid':\r\n              fitnessForm.get('city').touched &&\r\n              fitnessForm.get('city').invalid\r\n          }\"\r\n        />\r\n  \r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('city').touched &&\r\n            fitnessForm.get('city').invalid\r\n          \"\r\n          class=\"invalid-feedback\"\r\n        >\r\n          <div *ngIf=\"fitnessForm.get('city').errors.required\">\r\n            city is required\r\n          </div>\r\n        </div>\r\n      </div>\r\n  \r\n      \r\n      <div class=\"form-group col-md-4\">\r\n        <label for=\"pincode\">Pincode </label>\r\n        <input\r\n          type=\"text\"\r\n          class=\"form-control\"\r\n          formControlName=\"pincode\"\r\n          id=\"pincode\"\r\n          [ngClass]=\"{\r\n            'is-invalid':\r\n              fitnessForm.get('pincode').touched &&\r\n              fitnessForm.get('pincode').invalid\r\n          }\"\r\n        />\r\n  \r\n        <div\r\n          *ngIf=\"\r\n            fitnessForm.get('pincode').touched &&\r\n            fitnessForm.get('pincode').invalid\r\n          \"\r\n          class=\"invalid-feedback\"\r\n        >\r\n          <div *ngIf=\"fitnessForm.get('pincode').errors.required\">\r\n            pincode is required\r\n          </div>\r\n          <div *ngIf=\"fitnessForm.get('pincode').errors?.pattern\">\r\n            pincode is invalid\r\n          </div>\r\n          <div *ngIf=\"fitnessForm.get('pincode').errors?.min || fitnessForm.get('pincode').errors?.max\">\r\n            pincode must be of 6 numbers\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n\r\n    <!-- <div class=\"form-group\">\r\n            \"Ctrl+K, C\" or \"Ctrl+E, C\" \r\n\r\n            <label for=\"age\">Age</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"age\" >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"address\">Address</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"address\" >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"State\">State</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"State\" >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"City\">City</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"City\" >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"Pincode\">Pincode</label>\r\n            <input type=\"text\" class=\"form-control\" id=\"Pincode\" >\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n            <label for=\"phone no\">phone no:</label>\r\n            <input type=\"tel\" class=\"form-control\" id=\"phone no\" >\r\n        </div>\r\n\r\n        <div class='mt-2'>\r\n            \r\n            <label for=\"trainerPreference\"> Trainer Type</label>\r\n            <select class=\"custom-select mr-sm-2\" id=\"trainerPreference\">\r\n                <option selected>Trainer preference</option>\r\n                <option value=\"Male\">Male</option>\r\n                <option value=\"Female\">Female</option>\r\n              </select>\r\n\r\n        </div>\r\n\r\n        <div class='mt-2'>\r\n            <label for=\"package\"> Package Type</label>\r\n            <select class=\"custom-select mr-sm-2\" id=\"package\">\r\n                <option selected>Trainer preference</option>\r\n                <option value=\"15k\">15K per month (Bodybuilding) </option>\r\n                <option value=\"30k\">30K per month (Bodybuilding + yoga)</option>\r\n                <option value=\"30k\">36K per month (Bodybuilding + yoga + swimming)</option>\r\n        \r\n              </select>\r\n\r\n        </div>\r\n        -->\r\n\r\n    <div class=\"mt-3\">\r\n      <button type=\"submit\" class=\"btn btn-primary btn-block col-md-8\">Submit</button>\r\n    </div>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n    \r\n    <div class=\"container-fluid\">\r\n        <div class=\"table-responsive\">\r\n            <table class=\"table  \">\r\n                <thead class=\"thead\">\r\n                    <th class=\"h1\">Sl NO</th>\r\n                    <th class=\"h2\">Name</th>\r\n                    <th class=\"h3\">Address</th>\r\n                    <th class=\"h4\">City</th>\r\n                    <th class=\"h5\">Package</th>\r\n                    <th class=\"h6\">Trainer Preference</th>\r\n                    <th class=\"h7\">Phone</th>\r\n                \r\n                </thead>\r\n                <tbody>\r\n                <tr *ngFor = \"let row of tableData\">\r\n                    <td>\r\n                        {{ row.id }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.firstname +\" \" + row.lastname }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.streetaddress }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.city }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.packages }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.trainerpreference }}\r\n                    </td>\r\n                    <td>\r\n                        {{ row.phonenumber }}\r\n                    </td>\r\n\r\n                    <td>\r\n                        <button class=\"btn btn-primary btn-block\" (click)=\"editAppointment(row.id)\">Edit</button>\r\n                        <button class=\"btn btn-primary btn-block\"  (click)=\"deletefitness(row.id)\">Delete</button>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            \r\n        </div>\r\n   \r\n\r\n    \r\n    <div  *ngIf = \"showEditForm\"  class=\"container m-4\">\r\n\r\n      <div class=\"display-3 my-4\">Edit Appointment</div>\r\n        <form\r\n        name=\"fitnessForm\"\r\n        \r\n        [formGroup]=\"fitnessForm\"\r\n      >\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"first_name\">First Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"firstname\"\r\n            id=\"first_name\"\r\n            [ngClass]=\"{\r\n              'is-invalid':\r\n                fitnessForm.get('firstname').touched &&\r\n                fitnessForm.get('firstname').invalid\r\n            }\"\r\n            \r\n            autofocus\r\n          />\r\n    \r\n          <div\r\n            *ngIf=\"\r\n              fitnessForm.get('firstname').touched &&\r\n              fitnessForm.get('firstname').invalid\r\n            \"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"fitnessForm.get('firstname').errors.required\">\r\n              First Name is required\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('firstname').errors?.pattern\">\r\n              First Name should not contain number or symbol\r\n            </div>\r\n          </div>\r\n    \r\n        \r\n        </div>\r\n    \r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"last_name\">Last Name</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"lastname\"\r\n            id=\"last_name\"\r\n            [ngClass]=\"{\r\n              'is-invalid':\r\n                fitnessForm.get('lastname').touched &&\r\n                fitnessForm.get('lastname').invalid\r\n            }\"\r\n          />\r\n    \r\n          <div\r\n            *ngIf=\"\r\n              fitnessForm.get('lastname').touched &&\r\n              fitnessForm.get('lastname').invalid\r\n            \"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"fitnessForm.get('lastname').errors.required\">\r\n              Last Name is required\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('lastname').errors?.pattern\">\r\n              Last Name should not contain number or symbol\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"row\">\r\n      \r\n        <div class=\"form-group col-md-8\">\r\n          <label for=\"email\">Email</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            formControlName=\"email\"\r\n            id=\"email\"\r\n            [ngClass]=\"{\r\n              'is-invalid':\r\n                fitnessForm.get('email').touched &&\r\n                fitnessForm.get('email').invalid\r\n            }\"\r\n          />\r\n    \r\n          <div\r\n            *ngIf=\"\r\n              fitnessForm.get('email').touched &&\r\n              fitnessForm.get('email').invalid\r\n            \"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"fitnessForm.get('email').errors.required\">\r\n              Email is required\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('email').errors?.pattern\">\r\n              Email is invalid \r\n            </div>\r\n          </div>\r\n    \r\n          <small id=\"first_name_help\" class=\"form-text text-muted\"\r\n          >We'll never share your email with anyone else.</small\r\n        >\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"row\">\r\n    \r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"phonenumber\">Phone number </label>\r\n          <input\r\n            type=\"tel\"\r\n            class=\"form-control\"\r\n            formControlName=\"phonenumber\"\r\n            id=\"phonenumber\"\r\n            [ngClass]=\"{\r\n              'is-invalid':\r\n                fitnessForm.get('phonenumber').touched &&\r\n                fitnessForm.get('phonenumber').invalid\r\n            }\"\r\n          />\r\n    \r\n          <div\r\n            *ngIf=\"\r\n              fitnessForm.get('phonenumber').touched &&\r\n              fitnessForm.get('phonenumber').invalid\r\n            \"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"fitnessForm.get('phonenumber').errors.required\">\r\n              Phone number is required\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('phonenumber').errors?.pattern\">\r\n              Phone number should only contain number\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('phonenumber').errors?.min\">\r\n              Phone number should contain minimum 10 numbers\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('phonenumber').errors?.max\">\r\n              Phone number should contain maximum 10 numbers\r\n            </div>\r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"form-group col-md-2\">\r\n          <label for=\"age\">Age </label>\r\n          <input\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            formControlName=\"age\"\r\n            id=\"age\"\r\n            [ngClass]=\"{\r\n              'is-invalid':\r\n                fitnessForm.get('age').touched &&\r\n                fitnessForm.get('age').invalid\r\n            }\"\r\n          />\r\n    \r\n          <div\r\n            *ngIf=\"\r\n              fitnessForm.get('age').touched &&\r\n              fitnessForm.get('age').invalid\r\n            \"\r\n            class=\"invalid-feedback\"\r\n          >\r\n            <div *ngIf=\"fitnessForm.get('age').errors.required\">\r\n              Age is required\r\n            </div>\r\n            <div *ngIf=\"fitnessForm.get('age').errors?.pattern\">\r\n              Age should only contain number\r\n            </div>\r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('age').errors?.min ||\r\n                fitnessForm.get('age').errors?.max\r\n              \"\r\n            >\r\n              Age must be between 19 to 59\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"row\"> \r\n    \r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"trainer\">Trainer preference </label>\r\n    \r\n          <select\r\n            class=\"cutom-select\"\r\n            formControlName=\"trainerpreference\"\r\n            id=\"trainer\"\r\n            class=\"form-control\"\r\n          >\r\n            <option value=\"male\">male</option>\r\n            <option value=\"female\">female</option>\r\n            <option value=\"other\">other</option>\r\n          </select>\r\n        </div>\r\n    \r\n     \r\n    \r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"packages\">Package </label>\r\n    \r\n          <select\r\n            class=\"cutom-select\"\r\n            formControlName=\"packages\"\r\n            id=\"packages\"\r\n            class=\"form-control\"\r\n          >\r\n          <option value=\"500\" selected=\"true\">Basic Package / 500rs </option>\r\n          <option value=\"1000\">Intermediate Package / 1000rs</option>\r\n          <option value=\"1500\">Advance Package / 1500rs</option>\r\n          </select>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"inr\">INR </label>\r\n    \r\n          <input\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            formControlName=\"inr\"\r\n            id=\"inr\"\r\n            \r\n          />\r\n        </div>\r\n    \r\n        <div class=\"form-group col-md-4\">\r\n          <label for=\"paisa\">Paisa </label>\r\n    \r\n          <input\r\n            type=\"number\"\r\n            class=\"form-control\"\r\n            formControlName=\"paisa\"\r\n            id=\"paisa\"\r\n            \r\n          />\r\n        </div>\r\n    \r\n      </div>\r\n    \r\n    \r\n        \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-8\">\r\n            <fieldset>\r\n                <legend>Address</legend>\r\n    \r\n                <input\r\n                        type=\"text\"\r\n                        placeholder=\"Type address\"\r\n                        class=\"form-control\"\r\n                        formControlName=\"streetaddress\"\r\n                        [ngClass]=\"{\r\n                          'is-invalid':\r\n                            fitnessForm.get('streetaddress').touched &&\r\n                            fitnessForm.get('streetaddress').invalid\r\n                        }\"\r\n                      />\r\n    \r\n            </fieldset>\r\n            \r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('streetaddress').touched &&\r\n                fitnessForm.get('streetaddress').invalid\r\n              \"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"fitnessForm.get('streetaddress').errors.required\">\r\n                Address is required\r\n              </div>\r\n    \r\n    \r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n    \r\n        <div class=\"row\">\r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"country\">Country </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"country\"\r\n              id=\"country\"\r\n              [ngClass]=\"{\r\n                'is-invalid':\r\n                  fitnessForm.get('country').touched &&\r\n                  fitnessForm.get('country').invalid\r\n              }\"\r\n            />\r\n      \r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('country').touched &&\r\n                fitnessForm.get('country').invalid\r\n              \"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"fitnessForm.get('country').errors.required\">\r\n                country is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n      \r\n    \r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"state\">State </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"state\"\r\n              id=\"state\"\r\n              [ngClass]=\"{\r\n                'is-invalid':\r\n                  fitnessForm.get('state').touched &&\r\n                  fitnessForm.get('state').invalid\r\n              }\"\r\n            />\r\n      \r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('state').touched &&\r\n                fitnessForm.get('state').invalid\r\n              \"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"fitnessForm.get('state').errors.required\">\r\n                state is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n                <div class=\"form-group col-md-4\">\r\n            <label for=\"city\">City </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"city\"\r\n              id=\"city\"\r\n              [ngClass]=\"{\r\n                'is-invalid':\r\n                  fitnessForm.get('city').touched &&\r\n                  fitnessForm.get('city').invalid\r\n              }\"\r\n            />\r\n      \r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('city').touched &&\r\n                fitnessForm.get('city').invalid\r\n              \"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"fitnessForm.get('city').errors.required\">\r\n                city is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n      \r\n          \r\n          <div class=\"form-group col-md-4\">\r\n            <label for=\"pincode\">Pincode </label>\r\n            <input\r\n              type=\"text\"\r\n              class=\"form-control\"\r\n              formControlName=\"pincode\"\r\n              id=\"pincode\"\r\n              [ngClass]=\"{\r\n                'is-invalid':\r\n                  fitnessForm.get('pincode').touched &&\r\n                  fitnessForm.get('pincode').invalid\r\n              }\"\r\n            />\r\n      \r\n            <div\r\n              *ngIf=\"\r\n                fitnessForm.get('pincode').touched &&\r\n                fitnessForm.get('pincode').invalid\r\n              \"\r\n              class=\"invalid-feedback\"\r\n            >\r\n              <div *ngIf=\"fitnessForm.get('pincode').errors.required\">\r\n                pincode is required\r\n              </div>\r\n              <div *ngIf=\"fitnessForm.get('pincode').errors?.pattern\">\r\n                pincode is invalid\r\n              </div>\r\n              <div *ngIf=\"fitnessForm.get('pincode').errors?.min || fitnessForm.get('pincode').errors?.max\">\r\n                pincode must be of 6 numbers\r\n              </div>\r\n    \r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"mt-3\">\r\n            <button type=\"submit\" (click)=\"saveAppointment()\" class=\"btn btn-primary btn-block col-md-8\">Submit</button>\r\n          </div>\r\n        </form>\r\n    </div>\r\n</div> </div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/_services/contact.service.ts":
/*!**********************************************!*\
  !*** ./src/app/_services/contact.service.ts ***!
  \**********************************************/
/*! exports provided: ContactService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactService", function() { return ContactService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var ContactService_1;




const httpOptions = {
    headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    }),
};
let ContactService = ContactService_1 = class ContactService {
    constructor(http) {
        this.http = http;
    }
    postcontactdata(data) {
        return this.http
            .post(ContactService_1.BaseUrl + "contacts", data, httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((err, caught) => {
            throw err || "Post request error in contact data submission";
        }));
    }
};
ContactService.BaseUrl = "http://localhost:6565/";
ContactService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ContactService = ContactService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], ContactService);



/***/ }),

/***/ "./src/app/_services/index.ts":
/*!************************************!*\
  !*** ./src/app/_services/index.ts ***!
  \************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/_services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]; });





/***/ }),

/***/ "./src/app/_services/user.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/user.service.ts ***!
  \*******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
var UserService_1;




const httpOptions = {
    headers: new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ "Content-Type": "application/json" })
};
let UserService = UserService_1 = class UserService {
    constructor(http) {
        this.http = http;
    }
    deletefitnessdata() {
        throw new Error("Method not implemented.");
    }
    postfitnessdata(data) {
        return this.http.post(UserService_1.BaseUrl + 'allfriends', data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    updatefitnessdata(id, data) {
        return this.http.put(UserService_1.BaseUrl + 'allfriends/' + id, data, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    getfitnessdata(id = null) {
        let baseURL = UserService_1.BaseUrl + 'allfriends';
        if (id != null) {
            baseURL += "/" + id;
        }
        return this.http.get(baseURL, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
    deletedata(id) {
        return this.http.delete(UserService_1.BaseUrl + 'allfriends/' + id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => response.json()));
    }
};
UserService.BaseUrl = "http://localhost:6565/";
UserService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
UserService = UserService_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
], UserService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");
/* harmony import */ var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");







const routes = [
    { path: "landing-page", component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"] },
    { path: "place-fitness-trainer-appointment", component: _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_6__["PlaceFitnessTrainerAppointmentComponent"] },
    { path: "view-appointment", component: _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_5__["ViewAppointmentComponent"] },
    { path: "contact-us", component: _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_4__["ContactUsComponent"] },
    { path: "**", redirectTo: "landing-page" }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'angularSPA';
    }
    landingpage() {
        this.router.navigateByUrl("landing-page");
    }
    placeAppointment() {
        this.router.navigateByUrl("place-fitness-trainer-appointment");
    }
    viewAppointment() {
        this.router.navigateByUrl("view-appointment");
    }
    contactUspage() {
        this.router.navigateByUrl("contact-us");
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");
/* harmony import */ var _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./view-appointment/view-appointment.component */ "./src/app/view-appointment/view-appointment.component.ts");
/* harmony import */ var angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-autofocus-fix */ "./node_modules/angular-autofocus-fix/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");











 // <--- new code

let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"],
            _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"],
            _view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_http__WEBPACK_IMPORTED_MODULE_8__["HttpModule"],
            angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_11__["AutofocusModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpClientModule"]
        ],
        exports: [_view_appointment_view_appointment_component__WEBPACK_IMPORTED_MODULE_10__["ViewAppointmentComponent"],
            _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_9__["PlaceFitnessTrainerAppointmentComponent"],
            _contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_5__["ContactUsComponent"],
            _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_6__["LandingPageComponent"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: Contact, ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Contact", function() { return Contact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_contact_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/contact.service */ "./src/app/_services/contact.service.ts");




class Contact {
    constructor(firstname, lastname, phonenumber, email, message) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.phonenumber = phonenumber;
        this.email = email;
        this.message = message;
    }
}
let ContactUsComponent = class ContactUsComponent {
    constructor(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.contactdata = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.obj = {};
    }
    ngOnInit() {
        this.contactForm = this.fb.group({
            firstname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            lastname: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            phonenumber: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[^ @]*@[^ @]*")]],
            message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        this.obj = Object.assign({}, this.contactForm.value, this.obj);
        this.contactForm.value;
        console.log("LOG: LoginComponent -> onSubmit -> this.contactForm.value", this.contactForm.value);
        if (this.contactForm.status === "VALID") {
            const contactFormData = new Contact(this.contactForm.value.firstname, this.contactForm.value.lastname, this.contactForm.value.phonenumber, this.contactForm.value.email, this.contactForm.value.message);
            this.contactdata.emit(contactFormData);
            this.contactService
                .postcontactdata({
                firstname: contactFormData.firstname,
                lastname: contactFormData.lastname,
                phonenumber: contactFormData.phonenumber,
                email: contactFormData.email,
                message: contactFormData.message,
            })
                .subscribe((result) => alert("Contact us request raised !"), (error) => alert("Error while submitting the form"));
        }
    }
};
ContactUsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ContactUsComponent.prototype, "contactdata", void 0);
ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact-us',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact-us.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact-us/contact-us.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _services_contact_service__WEBPACK_IMPORTED_MODULE_3__["ContactService"]])
], ContactUsComponent);



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LandingPageComponent = class LandingPageComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navpage() {
        this.router.navigateByUrl("place-gift-card-order-page");
    }
};
LandingPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-landing-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./landing-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/landing-page/landing-page.component.html")).default
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], LandingPageComponent);



/***/ }),

/***/ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: Fitness, PlaceFitnessTrainerAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Fitness", function() { return Fitness; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceFitnessTrainerAppointmentComponent", function() { return PlaceFitnessTrainerAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");




let Fitness = class Fitness {
    constructor(firstname, lastname, age, phonenumber, email, streetaddress, city, state, country, pincode, trainerpreference, physiotherapist, packages, inr, paisa) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.phonenumber = phonenumber;
        this.email = email;
        this.streetaddress = streetaddress;
        this.city = city;
        this.state = state;
        this.country = country;
        this.pincode = pincode;
        this.trainerpreference = trainerpreference;
        this.physiotherapist = physiotherapist;
        this.packages = packages;
        this.inr = inr;
        this.paisa = paisa;
    }
};
Fitness.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: Number },
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: String },
    { type: String },
    { type: String },
    { type: Number },
    { type: Number }
];
Fitness = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: "[appautoFocus]"
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, String, Number, Number, String, String, String, String, String, Number, String, String, String, Number, Number])
], Fitness);

let PlaceFitnessTrainerAppointmentComponent = class PlaceFitnessTrainerAppointmentComponent {
    constructor(userService, formBuilder, firstnameElement) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.firstnameElement = firstnameElement;
        this.noNummbersValidation = "[a-zA-Z]*";
        this.emailValidation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        this.numberValidation = "[0-9]*";
    }
    ngOnInit() {
        this.fitnessForm = this.formBuilder.group({
            firstname: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.noNummbersValidation),
                ]
            ],
            lastname: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.noNummbersValidation),
                ]
            ],
            email: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.emailValidation)
                ]
            ],
            age: [
                null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(19), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(59)
                ],
            ],
            phonenumber: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberValidation),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)
                ]
            ],
            streetaddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            pincode: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.numberValidation),
                ]
            ],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.noNummbersValidation)]],
            inr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            trainerpreference: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            packages: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            paisa: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.firstnameElement.nativeElement.focus();
    }
    ngAfterContentInit() {
    }
    onSubmit() {
        //use try catch
        if (this.fitnessForm.valid) {
            this.userService
                .postfitnessdata(new Fitness(this.fitnessForm.value.firstname, this.fitnessForm.value.lastname.value, this.fitnessForm.value.age, this.fitnessForm.value.phonenumber, this.fitnessForm.value.email, this.fitnessForm.value.streetaddress, this.fitnessForm.value.city, this.fitnessForm.value.state, this.fitnessForm.value.country, this.fitnessForm.value.pincode, this.fitnessForm.value.trainerpreference, "yes", this.fitnessForm.value.packages, this.fitnessForm.value.inr, this.fitnessForm.value.paisa))
                .subscribe((res) => {
                alert("Appointment Placed");
            }, (err) => {
                alert("Error in placing the appointment");
            });
        }
        else {
            alert("Form Incomplete !");
        }
    }
};
PlaceFitnessTrainerAppointmentComponent.ctorParameters = () => [
    { type: _services___WEBPACK_IMPORTED_MODULE_3__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
], PlaceFitnessTrainerAppointmentComponent.prototype, "appAutoFocus", void 0);
PlaceFitnessTrainerAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-place-fitness-trainer-appointment",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./place-fitness-trainer-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.html")).default,
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_3__["UserService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], PlaceFitnessTrainerAppointmentComponent);



/***/ }),

/***/ "./src/app/view-appointment/view-appointment.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/view-appointment/view-appointment.component.ts ***!
  \****************************************************************/
/*! exports provided: ViewAppointmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewAppointmentComponent", function() { return ViewAppointmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/ */ "./src/app/_services/index.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../place-fitness-trainer-appointment/place-fitness-trainer-appointment.component */ "./src/app/place-fitness-trainer-appointment/place-fitness-trainer-appointment.component.ts");





let ViewAppointmentComponent = 
//rewrite the code to make it prettier and recheck
class ViewAppointmentComponent {
    constructor(userService, formBuilder) {
        this.userService = userService;
        this.formBuilder = formBuilder;
        this.errorMsg = null;
        this.showEditForm = false;
        this.noNummbersValidation = "[a-zA-Z]*";
        this.emailValidation = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        this.numberValidation = "[0-9]*";
    }
    ngOnInit() {
        this.getfitness();
        this.fitnessForm = this.formBuilder.group({
            firstname: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.noNummbersValidation),
                ]
            ],
            lastname: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.noNummbersValidation),
                ]
            ],
            email: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.emailValidation)
                ]
            ],
            age: [
                null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(19), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(59)
                ],
            ],
            phonenumber: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.numberValidation),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)
                ]
            ],
            streetaddress: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            pincode: [
                null,
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(6),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.numberValidation),
                ]
            ],
            city: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            country: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.noNummbersValidation)]],
            inr: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            trainerpreference: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            physiotherapist: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            packages: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            paisa: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    editAppointment(id) {
        this.showEditForm = true;
        this.userService.getfitnessdata(id).subscribe((res) => {
            this.setFormFields(res);
            this.idUpdate = res.id;
        }, (err) => alert("Appointment not found !"));
    }
    setFormFields(result) {
        this.fitnessForm.setValue({
            firstname: result.firstname,
            lastname: result.lastname,
            age: result.age,
            phonenumber: result.phonenumber,
            email: result.email,
            streetaddress: result.streetaddress,
            city: result.city,
            state: result.state,
            country: result.country,
            pincode: result.pincode,
            trainerpreference: result.trainerpreference,
            physiotherapist: result.physiotherapist,
            packages: result.packages,
            inr: result.inr,
            paisa: result.paisa,
        });
        console.log(this.fitnessForm);
    }
    saveAppointment() {
        if (this.fitnessForm.valid) {
            this.userService
                .updatefitnessdata(this.idUpdate, new _place_fitness_trainer_appointment_place_fitness_trainer_appointment_component__WEBPACK_IMPORTED_MODULE_4__["Fitness"](this.fitnessForm.value.firstname, this.fitnessForm.value.lastname, this.fitnessForm.value.age, this.fitnessForm.value.phonenumber, this.fitnessForm.value.email, this.fitnessForm.value.streetaddress, this.fitnessForm.value.city, this.fitnessForm.value.state, this.fitnessForm.value.country, this.fitnessForm.value.pincode, this.fitnessForm.value.trainerpreference, "yes", this.fitnessForm.value.packages, this.fitnessForm.value.inr, this.fitnessForm.value.paisa))
                .subscribe((res) => {
                alert("Appointment Updated");
                this.showEditForm = false;
                console.log(res);
            }, (err) => {
                alert("Error in updating the appointment");
            });
        }
        else {
            alert("Form Incomplete !");
        }
    }
    tableUpdate(data) {
        this.tableData = data;
    }
    getfitness() {
        this.userService.getfitnessdata().subscribe((i) => this.tableUpdate(i), (err) => alert("error"));
    }
    deletefitness(id) {
        const confirmDelete = confirm("Confirm to delete ?");
        if (confirmDelete) {
            this.userService.deletedata(id).subscribe((i) => { alert("appointment deleted !"); location.reload(); }, (err) => alert("Error occured while deleting the appointment"));
        }
    }
};
ViewAppointmentComponent.ctorParameters = () => [
    { type: _services___WEBPACK_IMPORTED_MODULE_2__["UserService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ViewAppointmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-view-appointment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./view-appointment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/view-appointment/view-appointment.component.html")).default
    })
    //rewrite the code to make it prettier and recheck
    ,
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services___WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ViewAppointmentComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yakshaangular72\Desktop\Shahjad-Fitness tracker case study-xoriant\angular-fsd-fitness-jest\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map