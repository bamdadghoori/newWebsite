 
        $(document).ready(function () {
            /*webticker*/
            $('#webTicker').webTicker({
                speed: 70, //pixels per second
                height:'40px',
                direction: "right", //if to move left or right
                moving: true, //weather to start the ticker in a moving or static position
                startEmpty: true, //weather to start with an empty or full ticker
                duplicate: false, //if there is less items then visible on the ticker you can duplicate the items to make it continuous
                updatetype: "reset" //how the update would occur options are "reset" or "swap"
            });
            /* logo_slider*/
            $('.home_part2 .owl-carousel.logo_slider').owlCarousel({
                loop:true,
                autoplay:true,
                nav:true,
                autoplayTimeout:5000,
                animateOut:'zoomIn',
                navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
                rtl:true,
                items:14,
                dots:false,
                center:false,
                mouseDrag:true,
                touchDrag:true,
                responsive:{
                    320:{
                        items:2
                    },
                    768:{
                        items:4
                    },
                    1024:{
                        items:8
                    }
                }
            });
            /*news_slider*/
            $('.home_part3 .owl-carousel.news_slider').owlCarousel({
                loop:false,
                autoplay:false,
                nav:false,
                rtl:true,
                items:4,
                margin:5,
                center:false,
                dots:false,
                mouseDrag:false,
                touchDrag:false,
                responsive:{
                    320:{
                        items:1,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    768:{
                        items:2,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    992:{
                        items:4,
                        loop:false,
                        autoplay:false,
                        nav:false,
                        rtl:true,
                        margin:5,
                        center:false,
                        mouseDrag:false,
                        touchDrag:false
                    }
                }
            });
            /*insurance_slider*/
            $('.home_part4 .owl-carousel.insurance_slider').owlCarousel({
                loop:false,
                autoplay:false,
                nav:false,
                rtl:true,
                items:4,
                dots:false,
                center:false,
                mouseDrag:false,
                touchDrag:false,
                responsive:{
                    320:{
                        items:1,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    768:{
                        items:2,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    1024:{
                        items:4,
                        loop:false,
                        autoplay:false,
                        nav:false,
                        rtl:true,
                        center:false,
                        mouseDrag:false,
                        touchDrag:false
                    }
                }
            });
            /*elec_slider*/
            $('.home_part5 .owl-carousel.elec_slider').owlCarousel({
                loop:true,
                autoplay:true,
                nav:true,
                autoplayTimeout:5000,
                navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"],
                rtl:true,
                items:5,
                margin:25,
                dots:false,
                center:false,
                mouseDrag:true,
                touchDrag:true,
                responsive:{
                    320:{
                        items:1
                    },
                    768:{
                        items:2
                    },
                    992:{
                        items:5
                    }
                }
            });
            /*advice_slider*/
            $('.home_part6 .owl-carousel.advice_slider').owlCarousel({
                loop:false,
                autoplay:false,
                nav:false,
                rtl:true,
                items:5,
                dots:false,
                center:false,
                mouseDrag:false,
                touchDrag:false,
                responsive:{
                    320:{
                        items:1,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    768:{
                        items:2,
                        autoplay:true,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    1024:{
                        items:5,
                        loop:false,
                        autoplay:false,
                        nav:false,
                        rtl:true,
                        center:false,
                        mouseDrag:false,
                        touchDrag:false
                    }
                }
            });
            /*option_slider*/
            $('.home_part7 .owl-carousel').owlCarousel({
                loop:true,
                autoplay:true,
                nav:false,
                rtl:true,
                items:1,
                dots:true,
                dotsEach:true,
                center:false,
                mouseDrag:true,
                touchDrag:true,
                responsive:{
                    320:{
                        items:1,
                        autoplay:false,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    768:{
                        items:2,
                        autoplay:false,
                        loop:true,
                        autoplayTimeout:5000,
                        animateOut:'zoomIn',
                        mouseDrag:true,
                        touchDrag:true,
                        margin:10,
                        nav:true,
                        navText: ["<i class='fa fa-angle-right'></i>","<i class='fa fa-angle-left'></i>"]
                    },
                    992:{
                        items:1
                    }
                }
            });

            /*remmeber btn*/
            $(".remember_btn").on("click",function () {
                var $this = $(this);
                if($this.next().hasClass("active")){
                    $this.next().removeClass("active");
                }
                else{
                    $this.next().addClass("active");
                }
            });

            /*accordian form*/
            $(".accordian_form").on("click",function(){
                if($(".form_style2").is(":hidden")){
                    $(".form_style2").slideDown();
                    $(this).find("i").removeClass("fa-angle-down").addClass("fa-angle-up");
                }
                else{
                    $(".form_style2").slideUp();
                    $(this).find("i").removeClass("fa-angle-up").addClass("fa-angle-down");
                }
            });
        });
     
//-----------------------

currentDate = null;
var jobs = [];

$(document).ready(function(){

    var $win_width = $(window).width();
    if($win_width <1024)
    {
        $(".default").on("click",function () {
            if($(this).next(".drop_submenu").is(":hidden")){
                $(".drop_submenu").hide();
                $(this).next(".drop_submenu").show();
            }
            else{
                $(this).next(".drop_submenu").hide();
            }
        });


        $("body").click(function(e){
            if(!$(e.target).is(".drop_submenu") && !$(e.target).is(".drop_submenu *") && !$(e.target).is(".drop_down") && !$(e.target).is(".drop_down *")){
                $('.drop_submenu').hide();
            }
        });
    }


    $('body').on('change','.rshow select.form-control', function(){
        
        var $this = $(this);
        var closestParent = $this.closest('.step');
        var $inputsOfCurrentStep = closestParent.find('.form-control:visible');                
        
        if($this.is('input[type="text"]'))
        {
            return false;
        }

        if($inputsOfCurrentStep.length == 1)
        {
            //has-khesarat effect on code display
            if(($(this).hasClass('khesarat-select2')))
            {
                $('.khesarat-select2-wrapper').hide();
                $('.khesarat-select3-wrapper').show();
                return false;
            }

            if($this.val() != 0)
            {
                nextStep($this);
            }

            //reverse has-khesarat effect
            if($('.khesarat-select1-wrapper').is(':visible'))
            {
                $('.khesarat-select2-wrapper').show();
                $('.khesarat-select3-wrapper').hide();
            }
            
        }
        else
        {                    
            var goToNextStep = true;
            var firstElement = $inputsOfCurrentStep.eq(0);
            var secondElement = $inputsOfCurrentStep.eq(1);
            if(secondElement.is('input'))
            {
                if(firstElement.val() == "3")
                {
                    secondElement.removeAttr('disabled').addClass("mustValidate");
                    goToNextStep = false;
                }
                else
                {
                    secondElement.attr('disabled','disabled').removeClass("mustValidate");
                }

                if(firstElement.val() > 5)
                {                            
                    secondElement.removeAttr('disabled');
                    goToNextStep = false;
                }
            }

            //two selects 
            if(secondElement.is('select'))
            {         
                $inputsOfCurrentStep.each(function(key,elementOfTheStep){ 
                    if(!$(elementOfTheStep).val())
                    {
                        goToNextStep = false;
                    }
                });  
            }

            if(goToNextStep)
            {
                nextStep($this);
            }
        }

        checkForLastStep($(this));

    });

    $('body').on('click','.plan-country button', function(){
        $(this).closest('.row').find('input[type="hidden"]').val($(this).val());
        if(($(this).hasClass('is-resident')) && ($(this).val() == "1"))
        {
            $('.3rd-part1').hide();
            $('.3rd-part2').show();
            $('#residencyLevel').addClass('mustValidate');
            return false;
        }

        if(($(this).hasClass('is-brand-new')) && ($(this).val() == "0"))
        {
            $('.body-damage-1').hide();
            $('.body-damage-2').show();
            $('#BodyNoDamageDisc').addClass('mustValidate');
            return false;
        }

        nextStep($(this));

        $('.3rd-part1').show();
        $('.3rd-part2').hide();
        $('#residencyLevel').removeClass('mustValidate');

        $('.body-damage-1').show();
        $('.body-damage-2').hide();
        $('#BodyNoDamageDisc').removeClass('mustValidate');

        checkForLastStep($(this));
        
    });

    function checkForLastStep(element)
    {
        if(element.closest('.step').is(':last-child'))
        {            
            var theForm = element.closest('form');
            theForm.submit();
        }
    }

    $('body').on('click','.next', function(){
        if(!$(this).children().hasClass('disabled'))
        {
            var currentActiveDot = $(this).closest('.car-form').prev().find('.movetoc').html();
            var currentElement = $(this).prev().find("[data-stepnum='"+currentActiveDot+"']").children();
            nextStep(currentElement);
        }
    });

    $('body').on('click','.previous', function(){
        if(!$(this).children().hasClass('disabled'))
        {
            var currentActiveDot = $(this).closest('.car-form').prev().find('.movetoc').html();
            var currentElement = $(this).next().find("[data-stepnum='"+currentActiveDot+"']").children();
            previousStep(currentElement);
        }
    });

    $('body').on('click','.step-form-btn', function(){
        var theForm = $(this).closest('form');
        
        var validationResult = validateFields($(this).prev().prev().find('.rshow'));
        if(validationResult == false)
        {
            return false;
        }
        theForm.submit();
    });

    
    $.getJSON("jobs-v2.json", function(data) {
        $.each(data, function(key, value) {
            if ($.inArray(value.title, jobs) === -1) {
                jobs.push({
                    id: value.id, 
                    title:  value.title
                });
            }
        })
    });
    
    

    currentDate = $('meta[name=currentShamsiDate]').attr("content");

});

$("#firstJobLevel").autocomplete({
        source: function(req, response) { 
        var re = $.ui.autocomplete.escapeRegex(req.term); 
        var matcher = new RegExp(re);
        response(
                $.grep( jobs, function(item)
                {
                    return matcher.test(item.title); 
                }) 
            ); 
        },
        minLength:3,
        select: function( event, ui ) 
        {
            $("#firstJobLevel").val(ui.item.title);           
            $("#firstJobLevelid").val(ui.item.id); 
            $("#secondJobLevel").removeClass("disabled");  
            $(this).closest('.form-container').next().children().removeClass('disabled');          
            return false;
        }
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
    return $( "<li>" )
        .append( "<span>" + item.title )
        .appendTo( ul );
    };

    $("#secondJobLevel").autocomplete({
        source: function(req, response) { 
        var re = $.ui.autocomplete.escapeRegex(req.term); 
        var matcher = new RegExp(re);
        response(
                $.grep( jobs, function(item)
                {
                    return matcher.test(item.title); 
                }) 
            ); 
        },
        minLength:3,
        select: function( event, ui ) 
        {
            $("#secondJobLevel").val(ui.item.title);           
            $("#secondJobLevelid").val(ui.item.id);           
            return false;
        }
    })
    .data( "ui-autocomplete" )._renderItem = function( ul, item ) {
    return $( "<li>" )
        .append( "<span>" + item.title )
        .appendTo( ul );
    };

function previousStep(currentElement)
{
    var closestParent = $(currentElement).closest('.step');

    var stepNumber = parseInt(closestParent.data('stepnum'));
    var mainDivs = closestParent.parent().find('.step');
    var mainDivsLength = parseInt(closestParent.parent().find('.step').length);
    var submitBtn = closestParent.parent().parent().find('.step-form-btn');
    var nextBtn = closestParent.closest('.car-form').find('.next');
    var prevBtn = closestParent.closest('.car-form').find('.previous');

    var dotDivs = $(currentElement).closest('.car-form').prev();
                
    var theDifference = mainDivsLength - stepNumber;

    if(stepNumber > 1)
    {
        //dots
        dotDivs.find('.dot').removeClass('movecl').removeClass('movecr').removeClass('movetoc');
                
        dotDivs.find('.dot:contains("'+ (stepNumber-1) +'")').addClass('movetoc');
        for (var i = 1; i < mainDivsLength; i++) 
        {  
            if(i > stepNumber)              
            {
                dotDivs.find('.dot:contains("'+ (i) +'")').addClass('movecl');
            }

            if(i < stepNumber)
            {
                dotDivs.find('.dot:contains("'+ (i) +'")').addClass('movecr');
            }                    
        }                

        closestParent.removeClass('rshow').addClass('hide').addClass('rhide');
        closestParent.prev().removeClass('hide').removeClass('rhide').addClass('rshow');
    }

    //hide/show the next and previous buttons
    nextBtn.removeClass('hidden');
    submitBtn.addClass('hidden');            
    nextBtn.children().removeClass('disabled');
}

function nextStep(currentElement)
{    
    var closestParent = $(currentElement).closest('.step');

    var validationResult = validateFields(closestParent);
    if(validationResult == false)
    {
        return false;
    }

    var stepNumber = parseInt(closestParent.data('stepnum'));
    var mainDivs = closestParent.parent().find('.step');
    var mainDivsLength = parseInt(closestParent.parent().find('.step').length);
    var submitBtn = closestParent.parent().parent().find('.step-form-btn');
    var nextBtn = closestParent.closest('.car-form').find('.next');
    var prevBtn = closestParent.closest('.car-form').find('.previous');

    var dotDivs = $(currentElement).closest('.car-form').prev();
                
    var theDifference = mainDivsLength - stepNumber;
    /*stepper is somewhere in between the steps*/
    if(theDifference > 1)
    {
        //dots
        dotDivs.find('.dot').removeClass('movecl').removeClass('movecr').removeClass('movetoc');
        for (var i = 1; i < (stepNumber+1); i++) 
        {
            dotDivs.find('.dot:contains("'+ (i) +'")').addClass('movecr');
        }                
        dotDivs.find('.dot:contains("'+ (stepNumber+1) +'")').addClass('movetoc');
        //hide/show the steps
        closestParent.removeClass('rshow').addClass('hide').addClass('rhide');
        closestParent.next().removeClass('hide').removeClass('rhide').addClass('rshow');

    }
    else if(theDifference == 1)
    {
        dotDivs.find('.dot').removeClass('movecl').removeClass('movecr').removeClass('movetoc');
        for (var i = 1; i < (stepNumber+1); i++) 
        {
            dotDivs.find('.dot:contains("'+ (i) +'")').addClass('movecr');
        }                
        dotDivs.find('.dot:contains("'+ (stepNumber+1) +'")').addClass('movetoc');

        closestParent.removeClass('rshow').addClass('hide').addClass('rhide');
        closestParent.next().removeClass('hide').removeClass('rhide').addClass('rshow');

        nextBtn.addClass('hidden');
        submitBtn.removeClass('hidden');
    }
    else
    {
        console.log("elsssssse");
    }

    //hide/show the next and previous buttons            
    prevBtn.children().removeClass('disabled');
}        

/**********************/
function validateFields(selector)
{
    var fieldsToValidate = [];    
    var $allFiledsOfContainer = $(selector).find('.mustValidate');            
    
    $.each($allFiledsOfContainer, function(key, value){        
        if($(value).parent().css('display') !== 'none')
        {
            fieldsToValidate.push($(value));
        }        
    });
    var result = checkForEmptyFields(fieldsToValidate);

    if(result.status == false)
    {
        alert(result.message);
        return false;
    }

    return true;
}

function checkForEmptyFields(elementsArray)
{
    var message = 'لطفا تمامی ورودی ها را پر کنید';
    var status = true;
    $.each(elementsArray,function(key, element){
        
        if($(element).is('input[type="hidden"]'))
        {
            if($(element).val() != "")
            {
                //$(element).css("border-color", "#ccc");
            }
            else if($(element).val() == "")
            {
                message ="لطفا یکی از موارد را انتخاب نمایید";
                status = false;
            }
        }
        else if($(element).prop('id') == "annualPayment")
        {
            var minimumAmount = 4000000;
            var maximumAmount = 200000000;
            var minAmountToShow = "4,000,000";
            var maxAmountToShow = "200,000,000";

            if($(element).val().replace(/,/g, '') < minimumAmount)
            {
                status = false;
                message = "مبلغ وارد شده نباید کمتر از "+minAmountToShow+" ريال باشد";
            }

            if($(element).val().replace(/,/g, '') > maximumAmount)
            {
                status = false;
                message = "مبلغ وارد شده نباید بیشتر از "+maxAmountToShow+" ريال باشد";
            }
        }
        else if($(element).prop('id') == "mobilePrice")
        {
            var mobileMaximumAmount = 100000000;
            var mobileMinAmountToShow = "100,000,000";
            
            if($(element).val().replace(/,/g, '') > mobileMaximumAmount)
            {
                status = false;
                message = "مبلغ وارد شده نباید بیشتر از "+mobileMinAmountToShow+" ريال باشد";
            }

            if(!$(element).val() || $(element).val() == 0)
            {
                status = false;
            }
        }
        else if($(element).is('input'))
        {
            if($(element).val() != "")
            {
                $(element).css("border-color", "#ccc");
            }
            else if($(element).val() == "")
            {
                $(element).css("border-color", "red");
                status = false;
            }

        }
        else if($(element).is('select'))
        {
            if($(element).children('option:selected').val() != "")
            {
                $(element).css("border-color", "#ccc");
            }
            else if($(element).children('option:selected').val() == "")
            {
                $(element).css("border-color", "red");
                status = false;
            }
        }        

    });
    var result = {'status':status, 'message':message} ;
    return result;
}

$('body').on('change','.typeClass', function(){
    
    var brand = $(this).val();
    var $carModelParent = $(this).parent().next().find('select');
    $carModelParent.empty();
    var $defaultValue ='<option value="">نوع خودرو</option>';
    $carModelParent.append($defaultValue);
    $.get("models.json", function(models)
    {
        $.each(models,function(key, model)
        {
            var selected = "";                          
            if(model.car_brands_id == brand)
            {                        
                var $modelLi  = '<option '+selected+' value="'+model.id+'">'+model.model_name+'</option>';
                $carModelParent.append($modelLi);
            }
        });
    });    
});

$('body').on('keyup',".commaSeparate",function(event) {
    if(event.which >= 37 && event.which <= 40) return;
    $(this).val(function(index, value) {
        return value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    });
    $(this).closest('.form-container').next().children().removeClass('disabled');
});

$('body').on('keyup',".melkType",function(event) {
    $(this).closest('.form-container').next().children().removeClass('disabled');
});

$('body').on('change','#birthYear',function(){
    var age = 1398 - $(this).val();
    setDurationBasedOnAge(age);
});

function setDurationBasedOnAge(age) {
    $('#lifeInsDuration').empty();
    
    $('<option/>').val("").html('مدت بیمه نامه').attr("selected","selected").appendTo('#lifeInsDuration')

    let values = [];
    let counter = 5;
    if (age >= 60)
        while (age + counter <= 70)
            values.push(counter++);
    else
        while (age + counter <= 80 && counter <= 30)
            values.push(counter++);

    for (let i = 0; i < values.length; i++) {
        $('<option/>').val(values[i]).html(values[i]).appendTo('#lifeInsDuration');
    }

}

//Life insurance

function setDurationBasedOnAge(age) {
    $('#lifeInsDuration').empty();
    
    $('<option/>').val("").html('مدت بیمه نامه').attr("selected","selected").appendTo('#lifeInsDuration')

    let values = [];
    let counter = 5;
    if (age >= 60)
        while (age + counter <= 70)
            values.push(counter++);
    else
        while (age + counter <= 80 && counter <= 30)
            values.push(counter++);

    for (let i = 0; i < values.length; i++) {
        $('<option/>').val(values[i]).html(values[i]).appendTo('#lifeInsDuration');
    }

}

function getBirthDate() {
    const birthYear = parseInt($('#birthYear').val());
    const birthMonth = parseInt($('#birthMonth').val());
    const birthDay = parseInt($('#birthDay').val());
    if (birthYear == 0 || birthMonth == 0 || birthDay == 0)
        return "";

    if (birthMonth > 6 && birthDay == 31)
        return "";

    if (birthMonth == 12 && birthDay == 30 && leapYears.indexOf(birthYear) == -1)
        return "";

    const birthDate = birthYear.toString() + "/" + birthMonth.toString().padStart(2, "0") + "/" + birthDay.toString().padStart(2, "0");
    if (birthDate > currentDate)
        return "";

    return birthDate;
}

//get age of the patient using the currentDate and birthDate pf the patient
function getAge(birthDate) {
    if (birthDate > currentDate)
        return 0;
    
    const birthYear = parseInt(birthDate.substring(0, 4));
    const birthMonth = parseInt(birthDate.substring(5, 7));
    const birthDay = parseInt(birthDate.substring(8, 10));

    const currentYear = parseInt(toEnglishNumber(currentDate.substring(0, 4)));
    const currentMonth = parseInt(toEnglishNumber(currentDate.substring(5, 7)));
    const currentDay = parseInt(toEnglishNumber(currentDate.substring(8, 10)));

    let age = currentYear - birthYear;
    
    if (birthMonth > currentMonth)
        age--;
    else if (birthMonth == currentMonth && birthDay > currentDay)
        age--;
    
    return age;
}

function toEnglishNumber(val) {
    val = val.replace(/۰/g, '0').replace(/۱/g, '1').replace(/۲/g, '2').replace(/۳/g, '3').replace(/۴/g, '4')
        .replace(/۵/g, '5').replace(/۶/g, '6').replace(/۷/g, '7').replace(/۸/g, '8').replace(/۹/g, '9');
    return val;
}

//Mobile insurance

$("body").on('change','#mobileDevices',function(e){
    handleMobileBrands($(this).val());
});

$("body").on('change','#mobileBrands',function(e){
    handleMobileModels($(this).val(), true);
});

function handleMobileBrands(checkSelected, isOnChange = false)
{
    var mobileDeviceVal = $('#mobileDevices').val();
    var $mobileBrands = $("#mobileBrands");
    
    $mobileBrands.empty();            
    
    var $emptyOption = '<option value="">نوع برند</option>';
    $mobileBrands.append($emptyOption);

    $.get("mobileBrands.json", function(brands){
        $.each(brands,function(key, brand){
            if(brand.devices_id == mobileDeviceVal)
            {                            
                var $chosenLi = '<option value="'+brand.id+'">'+brand.title+'</option>';
                $mobileBrands.append($chosenLi);
            }
        });
    });
}

function handleMobileModels(checkSelected, isOnChange = false)
{
    var mobileBrandValue = $('#mobileBrands').val();

    var url = $('meta[name=base_url]').attr("content") + '/getMobileModels';
    $.get( url, {"brands_id":mobileBrandValue})
      .done(function(result2) {
            var models = JSON.parse(result2);
            
            var $mobileModels = $("#mobileModels");
            
            $mobileModels.empty();    
            
            var $emptyOption = '<option value="">مدل دستگاه</option>';
            $mobileModels.append($emptyOption);
            
                            
            $.each(models,function(key, model){
                
                if(model.brands_id == mobileBrandValue)
                {                      
                    var $chosenLi   = '<option value="'+model.id+'">'+model.title+'</option>';
                    $mobileModels.append($chosenLi);
                }
                
            });
            
      });
} 

function hideAndShow(target_item)
{                
    $('.tab_content1 li.item1').hide();
    target_item.show();
    $('.tab_btn1 .item .icon_insurance').removeClass('active');
    $(this).find('.icon_insurance').addClass('active');                   
} 

$('body').on('click','.tab_btn1 .item',function(){
    
    var target_title;
    var target_item;
    var display;
    
    if($(this).is("#car2"))
    {
        $('.tab_btn1 .item .icon_insurance').removeClass('active');
        $(this).find('.icon_insurance').addClass('active');
        return false;
    }
    target_title=$(this).attr('data-target');
    target_item=$('.tab_content1 li.item1[data-target='+target_title+']');
    display=target_item.css('display');
    if(display!='list-item')
    {
        $('.tab_content1 li.item1').hide();
        target_item.show();
        $('.tab_btn1 .item .icon_insurance').removeClass('active');
        $(this).find('.icon_insurance').addClass('active');
    }
    
}); 

$('.sub-menus2').on('click',function(){
    handleElevatorOrDoctorForm($(this));
});

function handleElevatorOrDoctorForm(parentElement){
    if(parentElement.hasClass('doctor'))
    {

        $('.tab_content1 .item1').hide();
        $('.tab_content1 .responsible').show();
        $('.tab_content1 .responsible .item2.doctor').show();
        $('.tab_content1 .responsible .item2.elevator').hide();
        $(".top-title").find("#textTitle").text("بیمه پزشکی");
    }
    else if (parentElement.hasClass('elevator'))
    {

        $('.tab_content1 .item1').hide();
        $('.tab_content1 .responsible').show();
        $('.tab_content1 .responsible .item2.elevator').show();
        $('.tab_content1 .responsible .item2.doctor').hide();
        $(".top-title").find("#textTitle").text("بیمه آسانسور");

    }

}

$('.sub-menus2').on('click',function(e){
    e.stopPropagation();
});

$("body").on('click','.is-doctor',function(e){
    val = $(this).val();
    $("#isDoctorHidden").val(val);
    $('#expertise').val("");
    if(val == 1)
    {   //pezeshk    
        $('.docOptions').show();
        $('.posDocOptions').hide();
        $('#isResidentHidden').addClass('mustValidate');
        //$('#residencyLevel').addClass('mustValidate');
        $('#isStudentHidden').removeClass('mustValidate');
    }
    else
    {          
        //pirazeshk
        $('.docOptions').hide();
        $('.posDocOptions').show();
        $('#isResidentHidden').removeClass('mustValidate');
        $('#residencyLevel').removeClass('mustValidate');
        $('#isStudentHidden').addClass('mustValidate');
    }
});

$("body").on('change','#expertise',function(e){
    var isDoctor = $("#isDoctorHidden").val();
    if(isDoctor == 1)
    {
        $('#isstudent').hide();
        $('#isresident').show();
    }
    else
    {
        $('#isstudent').show();
        $('#isresident').hide();
    }
});

$("body").on('click','.TP_damage',function(e){
    var val = $(this).val();
    if(val == 1) //خسارت دارد
    {
        $('.khesarat-select1-wrapper').hide();
        $('.khesarat-select2-wrapper').show();
    }
    else
    {
        $('.khesarat-select1-wrapper').show();
        $('.khesarat-select2-wrapper').hide();
        $('.khesarat-select3-wrapper').hide();
    }
});

$("body").on('click','.TP-all-form',function(e){
    var parentElement = $(this);
    if(parentElement.hasClass('motor'))
    {
        $('div.step.row.1st-step').children('.half').hide();
        $('div.step.row.1st-step').children('.full-motor').show();
        $('div.step.row.1st-step').children('.full-autocargo').hide();
        $('div.step.row.1st-step').children('.autopart').hide();
        $('div.step.row.1st-step').children('.autopart2').hide();
        $('div.step.row.1st-step').children('.full-autopassenger').hide();
        $(".top-title").find("#textTitle").text("بیمه موتور");
        $('#vehicleType').val(2);
    }
    else if(parentElement.hasClass('autocargo'))
    {
        $('div.step.row.1st-step').children('.half').hide();
        $('div.step.row.1st-step').children('.full-motor').hide();
        $('div.step.row.1st-step').children('.full-autocargo').show();
        $('div.step.row.1st-step').children('.autopart').show();
        $('div.step.row.1st-step').children('.autopart2').hide();
        $('div.step.row.1st-step').children('.full-autopassenger').hide();
        $(".top-title").find("#textTitle").text("بیمه بارکش");
        $('#vehicleType').val(4);
    }
    else if (parentElement.hasClass('autopassenger'))
    {
        $('div.step.row.1st-step').children('.half').hide();
        $('div.step.row.1st-step').children('.full-motor').hide();
        $('div.step.row.1st-step').children('.full-autocargo').hide();
        $('div.step.row.1st-step').children('.autopart').hide();
        $('div.step.row.1st-step').children('.autopart2').show();
        $('div.step.row.1st-step').children('.full-autopassenger').show();
        $(".top-title").find("#textTitle").text("بیمه اتوکار"); 
        $('#vehicleType').val(3);
    }
    else
    {
        $('div.step.row.1st-step').children('.half').show();
        $('div.step.row.1st-step').children('.full-motor').hide();
        $('div.step.row.1st-step').children('.full-autocargo').hide();
        $('div.step.row.1st-step').children('.autopart').hide();
        $('div.step.row.1st-step').children('.autopart2').hide();
        $('div.step.row.1st-step').children('.full-autopassenger').hide();
        $(".top-title").find("#textTitle").text("بیمه شخص ثالث");
        $('#vehicleType').val(1);
    }

    //$(".third-select-one").addClass("disabled");
    $(".1st-step").removeClass("hide rhide");

    if($(".2nd-step").hasClass('rshow'))
    {
        $(".2nd-step").removeClass('rshow');
        $(".2nd-step").addClass("hide rhide");
    }

    if($(".3rd-step").hasClass('rshow'))
    {
        $(".3rd-step").removeClass('rshow');
        $(".3rd-step").addClass("hide rhide");
    }

    if($(".4th-step").hasClass('rshow'))
    {
        $(".4th-step").removeClass('rshow');
        $(".4th-step").addClass("hide rhide");
    }

    if($(".5th-step").hasClass('rshow'))
    {
        $(".5th-step").removeClass('rshow');
        $(".5th-step").addClass("hide rhide");
    }

    //$('.next').addClass("hidden");

    //buttons
    
    

    //dots
    $('.third .case').parents().find('.dot').removeClass('movetoc');
    $('.third .case').parents().find('.dot').removeClass('movecr');
    $('.third .case').parents().find('.dot1 .dot').addClass('movetoc');

    $('.selected-value > p').text("");

    //nullin'
    $('.1st-step select').val("");
    $('.2nd-step select').val("");
    $('.melkType').removeClass("error");
    $('.melkType').val("");
    $(".1st-step").addClass( "rshow" );            
    $(".next a").addClass("disabled");

    if($('.3rd-step .left-khesarat .khesarat-btn').hasClass('active-btn'))
    {
        $('.3rd-step .left-khesarat .khesarat-btn').removeClass('active-btn');
    }
    if($('.3rd-step .right-khesarat .khesarat-btn').hasClass('active-btn'))
    {
        $('.3rd-step .right-khesarat .khesarat-btn').removeClass('active-btn');
    }
    $('.4th-step select').val("");
    $('input[name="TP_due_date"]').val("");
});

$( function() {
    /*datepicker*/
    $(".date1").persianDatepicker({
        months: ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"],
        dowTitle: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنج شنبه", "جمعه"],
        shortDowTitle: ["ش", "ی", "د", "س", "چ", "پ", "ج"],
        showGregorianDate: false,
        persianNumbers: 1,
        formatDate: "YYYY/MM/DD",
        selectedBefore: !1,
        prevArrow: '<i class="fa fa-arrow-right" aria-hidden="true"></i>',
        nextArrow: '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
        theme: 'default',
        alwaysShow: !1,
        selectableYears: null,
        selectableMonths: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        cellWidth: 40, // by px
        cellHeight: 40, // by px
        fontSize: 13, // by px
        isRTL: 1,
        calendarPosition: {
            x: 0,
            y: 0,
        },
        onShow: function () { },
        onHide: function () { },
        onSelect: function () {}
    });
} );