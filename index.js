
//ヘッダー画像
const imgs = ["./img/header-back01.jpg",
    "./img/header-back02.jpg",
    "./img/header-back03.jpg"];

//コース一覧背景
const course_imgs = ["./img/programming.jpg",
    "./img/office.jpg",
    "./img/server.jpg",
    "./img/network.jpg"];

//コース名
const course_name = ["プログラミングコース",
    "MicrosoftOfiiceコース",
    "サーバーエンジニアコース",
    "ネットワークエンジニアコース"];


$(() => {

    //ヘッダー画像の自動切り替え
    let n = 0;

    //これがないと初回がうまくいかない
    setTimeout(() => {
        $("header > img").css("opacity", 0.05);
    }, 2000);

    setInterval(() => {
        n++;
        $("header > img").css("opacity", 1)
        $("header > img").attr("src", imgs[n % 3]);

        setTimeout(() => {
            $("header > img").css("opacity", 0.05);
        }, 2000);

    }, 3000);



    //コース一覧
    let m = 0; //現在表示されている背景などを識別(0~3)

    $("#to_right").on("click", () => {

        if (m != 3) {
            m++;

            let url = course_imgs[m];

            $("#gray").css("background-color", "#e8e8e8");
            $("#course_name").text(course_name[m]);

            //スライド部分
            let value = -m * 25 + "%"
            $("#articles").css("translate", value);

            setTimeout(() => {

                $("#course_img").css("background-image", "url(" + url + ")");
                $("#gray").css("background-color", "rgba(255,255,255,0.4)");

            }, 400);

            //矢印のhover
            $("#to_left").attr("data-enable", "yes");

            if (m == 3) $("#to_right").attr("data-enable", "no");

        }
    });

    $("#to_left").on("click", () => {

        if (m != 0) {
            m--;

            let url = course_imgs[m];

            $("#gray").css("background-color", "#e8e8e8");
            $("#course_name").text(course_name[m]);

            //スライド部分
            let value = -m * 25 + "%"
            $("#articles").css("translate", value);

            setTimeout(() => {

                $("#course_img").css("background-image", "url(" + url + ")");
                $("#gray").css("background-color", "rgba(255,255,255,0.4)");

            }, 400);

            //矢印のhover
            $("#to_right").attr("data-enable", "yes");

            if (m == 0) $("#to_left").attr("data-enable", "no");

        }
    });


    //ハンバーガーメニューの開閉
    $(".hamburger").on("click", () => {
        switch ($("#hamburger_menu").css("scale")) {

            //開く
            case "1 0":
                $("#hamburger_menu").css("scale", "1");
                $("#hamburger_menu").css("translate", "0");
                break;

            //閉じる
            case "1":
                $("#hamburger_menu").css("scale", "1 0");
                $("#hamburger_menu").css("translate", "0 -170px");
                break;
        }
    });
});