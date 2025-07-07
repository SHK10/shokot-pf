/*!
    * Start Bootstrap - Agency v6.0.3 (https://startbootstrap.com/theme/agency)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
// <reference 
(function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (
            location.pathname.replace(/^\//, "") ==
                this.pathname.replace(/^\//, "") &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top - 72,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $(".js-scroll-trigger").click(function () {
        $(".navbar-collapse").collapse("hide");
    });

    // Activate scrollspy to add active class to navbar items on scroll
    $("body").scrollspy({
        target: "#mainNav",
        offset: 74,
    });

    // Collapse Navbar
    var navbarCollapse = function () {
        if ($("#mainNav").offset().top > 100) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    /**
     * Disable img and video download
     */
    $("img").on("contextmenu drag dragstart dragend", () => false);
    $("video").on("contextmenu", () => false);

    /**
     * dummy Login duckblue
     */
    const dummy = "duckblue";
    const dummyDom = $("#dummy");
    const dummyInputDom = dummyDom.find("input")
    const pass = window.sessionStorage.getItem('dummy');    
    if (dummy === pass) {
        dummyDom.hide();
    } else {
        dummyInputDom.on("keyup", (event) => {
            if (event.keyCode !== 13) {
                return;
            }
            const value = (dummyInputDom && dummyInputDom[0]) ? dummyInputDom[0].value : "";
            if (value === dummy) {
                dummyDom.hide();
                sessionStorage.setItem('dummy', value);
            }
        });
    }    

    /**
     * projects setting
     */
    const projectsEl = $("#projects")
    const categoryEl = $("#categories")

    const categories = {
        op: "op",
        logo: "logo",
        character: "character",
        illust: "illust",
        threeD: "threeD",
        personal: "personal",
        graphic: "graphic",
    }

    const configs = [
        {
            order: 1.1,
            title: "LINE Pay Promo Video",
            modalRef: "#portfolioModalLINEPay",
            year: "2024",
            month: "Feb",
            description: "Promo Video",
            imagePath: "./assets/img/pj-head/2402_LINEPay.jpg",
            category: [
                categories.graphic,
                categories.threeD,
            ],
        },
        {
            order: 1.2,
            title: "Yahoo! Map Landmark PJ",
            modalRef: "#portfolioModalYmap",
            year: "2024",
            month: "Apr",
            description: "3D modeling",
            imagePath: "./assets/img/pj-head/2404_Ymap.jpg",
            category: [
                categories.threeD
            ],
        },
        {
            order: 1.3,
            title: "Hello Friends!",
            modalRef: "#portfolioModalHelloFriends",
            year: "2025",
            month: "May",
            description: "OOH Video, 3D icon",
            imagePath: "./assets/img/pj-head/2505_HelloFriends.jpg",
            category: [
                categories.graphic,
                categories.threeD                
            ],
        },
        {
            order: 2.1,
            title: "LINE Seed Font Concept MV",
            modalRef: "#portfolioModalSeed",
            year: "2022",
            month: "Oct",
            description: "Concept Movie",
            imagePath: "./assets/img/pj-head/2210_LINE_Seed.jpg",
            category: [
                categories.graphic,
            ],
        },
        {
            order: 2.2,
            title: "LINE Skimani",
            modalRef: "#portfolioModalLINESkimani",
            year: "2022",
            month: "Apr",
            description: "Graphics",
            imagePath: "./assets/img/pj-head/2204_LINESkimani.jpg",
            category: [
                categories.graphic,
                categories.illust,
            ],
        },
        {
            order: 2.3,
            title: "LY Biz Concept",
            modalRef: "#portfolioModalLYBizConcept",
            year: "2023",
            month: "Sep",
            description: "Concept Movie",
            imagePath: "./assets/img/pj-head/2310_BIZconcept.jpg",
            category: [
                categories.graphic,
                categories.op,
            ],
        },
        {
            order: 3.1,
            title: "LINE WALK",
            modalRef: "#portfolioModalLINEWALK",
            year: "2024",
            month: "Jun",
            description: "Applications start animation",
            imagePath: "./assets/img/pj-head/2406_LINEWALK.jpg",
            category: [
                categories.threeD
            ],
        },
        {
            order: 3.2,
            title: "LY Design HUB",
            modalRef: "#portfolioModalLYDesign",
            year: "2025",
            month: "Apr",
            description: "Web animation",
            imagePath: "./assets/img/pj-head/2504_LYDesignHUB.jpg",
            category: [
                // categories.graphic,
            ],
        },
        {
            order: 3.3,
            title: "LINE CI Test",
            modalRef: "#portfolioModalLINECI",
            year: "2022",
            month: "Nov",
            description: "Web animation",
            imagePath: "./assets/img/pj-head/2211_LINE_CI.jpg",
            category: [
                // categories.graphic,
            ],
        },
        {
            order: 4.1,
            title: "MUSIC STATION",
            modalRef: "#portfolioModalMUSICSTATION",
            year: "Until",
            month: "now",
            description: "Artist back movie",
            imagePath: "./assets/img/pj-head/MUSICSTATION.jpg",
            category: [
                categories.graphic,
                categories.illust,
                categories.threeD
            ],
        },
        {
            order: 4.2,
            title: "Uber Eats",
            modalRef: "#portfolioModalUberEats",
            year: "2022",
            month: "Apr",
            description: "PR Movie",
            imagePath: "./assets/img/pj-head/2204_UberEats.jpg",
            category: [
                categories.graphic,
                categories.threeD
            ],
        },
        {
            order: 4.3,
            title: "LINE Investment Technology",
            modalRef: "#portfolioModalLIT",
            year: "2023",
            month: "Apr",
            description: "Web animation",
            imagePath: "./assets/img/pj-head/2304_LIT.jpg",
            category: [
                categories.graphic,
            ],
        },
        {
            order: 5.1,
            title: "SEKAI TAISOU -2021-",
            modalRef: "#portfolioModalSekaiTaisou",
            year: "2021",
            month: "Sep",
            description: "OP movie / Key visual / all around the venue design",
            imagePath: "./assets/img/pj-head/2109_SekaiTaisou_2021.jpg",
            category: [
                categories.op,
                categories.graphic,
                categories.threeD
            ],
        },
        {
            order: 5.2,
            title: "ABEMA HILLS",
            modalRef: "#portfolioModalABEMAhills",
            year: "2020",
            month: "Jul",
            description: "LOGO / OP movie / extra graphics",
            imagePath: "./assets/img/pj-head/2006_ABEMAhills.jpg",
            category: [
                categories.op,
                categories.graphic,
                categories.logo,
                categories.illust
            ],
        },
        {
            order: 5.3,
            title: "Karisome Tengoku  -oct-",
            modalRef: "#portfolioModalKarisomeOct",
            year: "2019",
            month: "Oct",
            description: "OP Movie / extra graphics",
            imagePath: "./assets/img/pj-head/1910_KarisomeOct.jpg",
            category: [
                categories.graphic,
                categories.op
            ],
        },
        {
            order: 6.1,
            title: "WaterO",
            modalRef: "#portfolioModalWatero",
            year: "2020",
            month: "Aug",
            description: "Logo / extra graphics",
            imagePath: "./assets/img/pj-head/2008_WaterO.jpg",
            category: [
                categories.graphic,
                categories.logo,
                categories.personal,
                categories.illust,
            ],
        },
        {
            order: 6.2,
            title: "Qicoka",
            modalRef: "#portfolioModalQicoka",
            year: "2022",
            month: "Feb",
            description: "Logo",
            imagePath: "./assets/img/pj-head/2202_Qicoka.jpg",
            category: [
                categories.personal,
                categories.logo,
            ],
        },
        {
            order: 6.3,
            title: "Azatokute nani ga Waruino?",
            modalRef: "#portfolioModalAzatokute",
            year: "2019",
            month: "Jul",
            description: "LOGO / extra graphics",
            imagePath: "./assets/img/pj-head/1909_Azatokute.jpg",
            category: [
                categories.logo
            ],
        },
        {
            order: 7.1,
            title: "Agile project",
            modalRef: "#portfolioModalAgileProject",
            year: "2021",
            month: "Dec",
            description: "Logo design",
            imagePath: "./assets/img/pj-head/2112_AgileProject.jpg",
            category: [
                categories.logo,
                categories.personal
            ],
        },
        {
            order: 7.2,
            title: "KASOUKEN no ONNA -season21-", 
            modalRef: "#portfolioModalKasouken21",
            year: "2021", 
            month: "Aug", 
            description: "OP Movie", 
            imagePath: "./assets/img/pj-head/2108_Kasouken21.jpg",
            category: [
                categories.graphic,
                categories.op,
            ], 
        },
        {
            order: 7.3,
            title: "NICE FLIGHT!",
            modalRef: "#portfolioModalNICEFLIGHT",
            year: "2022",
            month: "May",
            description: "OP / Teaser movie",
            imagePath: "./assets/img/pj-head/2205_NICEFLIGHT.jpg",
            category: [
                categories.graphic,
                categories.op
            ],
        },
        {
            order: 8.1,
            title: "Taiyou to Bolero",
            modalRef: "#portfolioModalTaiyoutoBolero",
            year: "2021",
            month: "Jun",
            description: "LOGO / VFX / extra graffics",
            imagePath: "./assets/img/pj-head/2107_TaiyoutoBolero.jpg",
            category: [
                categories.logo,
                categories.threeD,
                categories.graphic,
            ],
        },
        {
            order: 8.2,
            title: "CGDog",
            modalRef: "#portfolioModalCGDog",
            year: "2019",
            month: "Mar",
            description: "Animal character design",
            imagePath: "./assets/img/pj-head/1903_CGDog.jpg",
            category: [
                categories.illust,
                categories.threeD,
                categories.personal
            ],
        },
        {
            order: 8.3,
            title: "Onegai Ranking",
            modalRef: "#portfolioModalOnegai",
            year: "2020",
            month: "Nov",
            description: "CG set design",
            imagePath: "./assets/img/pj-head/2011_Onegai_set_logo.jpg",
            category: [
                categories.threeD
            ],
        },
        {
            order: 10.1,
            title: "TV Logo", 
            modalRef: "#portfolioModalSeiya",
            year: "2020", 
            month: "March", 
            description: "Logo Design", 
            imagePath: "./assets/img/pj-head/2003_Seiyanoapron.jpg",
            category: [
                categories.logo,
                categories.illust,
            ], 
        },
        // {
        //     order: 9,
        //     title: "SodaTV",
        //     modalRef: "#portfolioModalSodaTV",
        //     year: "2022",
        //     month: "Mar",
        //     description: "Set design,BG design",
        //     imagePath: "./assets/img/pj-head/2006_ABEMAhills.jpg",
        //     category: [
        //         categories.threeD
        //     ],
        // },  
        {
            order: 10.2,
            title: "Air Girl",
            modalRef: "#portfolioModalAirgirl",
            year: "2021",
            month: "Feb",
            description: "Key visual ",
            imagePath: "./assets/img/pj-head/2102_Airgirl.jpg",
            category: [
                categories.graphic,
            ],
        },
        {
            order: 10.3,
            title: "KANJAM",
            modalRef: "#portfolioModalKanjam",
            year: "2018",
            month: "Jul",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1807_Kanjam.jpg",
            category: [
                categories.op,
                categories.illust
            ],
        },
        {
            order: 11.1,
            title: "Nico-T Project",
            modalRef: "#portfolioModalNICOT",
            year: "2021",
            month: "Aug",
            description: "T-shirt Design",
            imagePath: "./assets/img/pj-head/2108_NicoT.jpg",
            category: [
                categories.graphic,
                categories.illust,
                categories.logo,
                categories.personal
            ],
        },
        {
            order: 11.2,
            title: "Karisome Tengoku  -Mar-",
            modalRef: "#portfolioModalKarisomeMar",
            year: "2019",
            month: "Mar",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1903_KarisomeMar.jpg",
            category: [
                categories.graphic,
                categories.op,
                categories.illust
            ],
        },
        {
            order: 11.3,
            title: "HIMOMEN",
            modalRef: "#portfolioModalHimomen",
            year: "2018",
            month: "Jul",
            description: "OP Movie",
            imagePath: "./assets/img/pj-head/1807_Himomen.jpg",
            category: [
                categories.op,
                categories.graphic,
                categories.illust
            ],
        },
        {
            order: 12.3,
            title: "Yamagata Vindage",
            modalRef: "#portfolioModalVindage",
            year: "2022",
            month: "Mar",
            description: "Logo / Graphic design",
            imagePath: "./assets/img/pj-head/2503_Vindage_KV_22.jpg",
            category: [
                categories.illust,
                categories.logo,
                categories.graphic,
                categories.personal
            ],
        },
        // {
        //     title: "Ariyoshi Tankentai",
        //     modalRef: "#portfolioModalAriyoshiTankentai",
        //     year: "2017",
        //     month: "Jul",
        //     description: "LOGO / OP movie / extra graffics ",
        //     imagePath: "./assets/img/pj-head/1707_AriyoshiTankentai.jpg",
        //     category: [
        //         categories.logo.op
        //     ],
        // },

        // TODO: add here
    ];

    const makeProjectEls = (arr) => {
        return arr.map((config) => (
            `
            <!-- ${config.order}. ${config.title} -->
            <div class="col-lg-4 col-sm-6 p-0">
                <div class="portfolio-item">
                    <a class="portfolio-link" data-toggle="modal" href="${config.modalRef}">
                        <div class="portfolio-hover">
                            <div class="portfolio-hover-content"><i class="fas fa-plus fa-3x"></i></div>
                            <div class="hover-content-above">
                                <div>${config.year}</div>
                                <div>${config.month}</div>
                            </div>
                            <div class="hover-content-bottom">
                                <div class="portfolio-caption-heading">${config.description}</div>
                            </div>
                        </div>
                        <img class="img-fluid" src="${config.imagePath}" alt="" />
                    </a>
                    <div class="portfolio-caption">
                        <div class="portfolio-caption-heading">${config.title}</div>
                    </div>
                </div>
            </div>
            `
        ));
    }

    const focusCategory = (selector) => {
        categoryEl.find("a").removeClass();
        $(selector).addClass("selected");
    }

    const projectFilter = (categoryKey, e) => {
        const contentClass = ".portfolio-item";
        const selectedConfigs = configs.filter((config) => {
            return !categoryKey ? true : config.category.includes(categoryKey);
        }).sort((a, b) => a.order - b.order);
        const els = makeProjectEls(selectedConfigs);

        projectsEl.find(contentClass).fadeOut(1000);
        projectsEl.empty().append(els.join("")).find(contentClass).hide().fadeIn(1000);

        focusCategory((e && e.target) ? `#${e.target.id}` : '#categoryAll');
    }
    $("document").ready(() => projectFilter());

    window.projectFilter = projectFilter

    /**
     * Modal
     */
    $(".modal").on("hidden.bs.modal", () => {
        const videoEls = $("video");
        videoEls.toArray().forEach((el) => {
            if(el && el.paused !== undefined && !el.paused) {
                el.pause()
            }
        });

        const iframeEls = $("iframe");
        iframeEls.toArray().forEach((el) => {
            if(el) {
                const src = el.src;
                el.src = src;
            }
        });
        
    })

    $(".open-image-src").on("click", (e) => {
        const imgUrl = e.target.src;
        $("#img-popup").children("img").attr("src", imgUrl);
        $("#img-popup").addClass("show");
        $("#img-popup .modal-bg").on("click", (e) => {
            e.stopPropagation()
            $("#img-popup").removeClass("show");
            $("#img-popup").children("img").attr("src", "");
        });
    });

})(jQuery); // End of use strict
