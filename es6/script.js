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
                        url: "/send.php"
                    })
                    console.log(data)
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
                            console.log(self.dataItem)
                            self.carouselInit()
                        } else {
                            self.dataItem--;
                            console.log(self.dataItem)
                            self.carouselInit()
                        }
                    } else {
                        if(self.dataItem === self.lengthItemPortfolio -1){
                            self.dataItem = 0;
                            console.log(self.dataItem)
                            self.carouselInit()
                        } else {
                            self.dataItem++;
                            console.log(self.dataItem)
                            self.carouselInit()
                        }
                    }
                })
            }



        }

        site.menuHandler();
        site.formHandler();
        site.carouselInit();
        site.carouselHandler();

    });
})(jQuery);