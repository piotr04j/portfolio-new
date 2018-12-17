(($)=>{
    $(()=>{
        
        const site = {

            dataItem: 0,
            lengthItemPortfolio: $('.portfolio__item').length,

            menuHandler: () => {
                $('.navigation__link').each( function(){
                    $(this).click( ()=> {
                        const idSection = $(this)[0].hash;
                        $('#menu').prop('checked', false);
                        $('body, html').animate({
                            scrollTop: $(idSection).offset().top
                        },600)
                        
                    })
                })
            },
            formHandler: () => {
                $('#form-mail').submit( function(e){
                    e.preventDefault();
                    const data = $(this).serialize();
                    $.ajax({
                        method: "POST",
                        data: data,
                        url: "/send.php",
                        success: (res) => {
                            if(res === "Success"){
                               
                                $('.contact__form__send').prop('disabled', true);
                                $('.contact__form__send').css({'backgroundColor': '#ccc'})
                                $('.contact__form__send').val('wysłano');

                                $('.contact__form__send--en').prop('disabled', true);
                                $('.contact__form__send--en').css({'backgroundColor': '#ccc'})
                                $('.contact__form__send--en').val('sent');
                            }
                        }
                    })
                })
            },
            carouselInit: function(){
                const self = this;
                $('.portfolio__item').each( function(index){
                   if(index === self.dataItem){
                        $(this).show();
                   } else {
                        $(this).hide();
                   }
                });        
            },
            carouselHandler: function(){
                const self = this;
                $('.portfolio__btn').click( function(){

                    if($(this).hasClass('portfolio__btn--left')){
                        if(self.dataItem === 0){
                            self.dataItem = self.lengthItemPortfolio -1;
                            self.carouselInit()
                        } else {
                            self.dataItem--;
                            self.carouselInit()
                        }
                    } else {
                        if(self.dataItem === self.lengthItemPortfolio -1){
                            self.dataItem = 0;
                            self.carouselInit()
                        } else {
                            self.dataItem++;
                            self.carouselInit()
                        }
                    }

                    $('body, html').animate({
                        scrollTop: $('#portfolio').offset().top
                    },600)
                });       
            },
            ieHandler: () => {
                if($('.footer').css('background-color') === 'rgb(204, 204, 204)'){
                    $('body').html('<h1 style="font-size: 5rem;font-weight: 400;margin: 3rem;">Your browser is deprecated. Please use a newer browser.</h1>');
                } 
            },
            init: function(){
                this.menuHandler();
                this.formHandler();
                this.carouselInit();
                this.carouselHandler();
                this.ieHandler();
            }
        }
    site.init();
    });
})(jQuery);