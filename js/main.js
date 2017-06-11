$( function () {
    $('.input--select').selectmenu();


    var jsSkill = ["Не владею", "Использую готовые решения", "Использую готовые решения и умею и переделывать"," " , "Пишу сложный JS с нуля"];

    $("#slider-range-min")
        .slider({
            min: 0,
            max: 4,
            step: 1,
            range: "min",
            value: 2
        })
        .slider("pips", {
            rest: "label",
            step: 1,
            labels: jsSkill
        });

});