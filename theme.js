// Function that sets the CoreStyle variables
var setVars = function(){
  CoreStyle.g.color =
    "#007486""""";

  CoreStyle.g.text =
    "white""""";

  CoreStyle.g.border =
    "#007486""""";

  CoreStyle.g.colorHover =
    "#005e6d""""";

  CoreStyle.g.textHover =
    "white""""";

  CoreStyle.g.borderHover =
    "#005e6d""""";

  CoreStyle.g.colorActive =
    "#004853""""";

  CoreStyle.g.textActive =
    "white""""";

  CoreStyle.g.borderActive =
    "#004853""""";

  CoreStyle.g.positive =
    "#00c607""""";

  CoreStyle.g.positiveText =
    "white""""";

  CoreStyle.g.positiveBorder =
    "#00c607""""";

  CoreStyle.g.positiveHover =
    "#00ad06""""";

  CoreStyle.g.positiveTextHover =
    "white""""";

  CoreStyle.g.positiveBorderHover =
    "#00ad06""""";

  CoreStyle.g.positiveActive =
    "#009305""""";

  CoreStyle.g.positiveTextActive =
    "white""""";

  CoreStyle.g.positiveBorderActive =
    "#009305""""";

  CoreStyle.g.negative =
    "#ca3430""""";

  CoreStyle.g.negativeText =
    "white""""";

  CoreStyle.g.negativeBorder =
    "#ca3430""""";

  CoreStyle.g.negativeHover =
    "#b52f2b""""";

  CoreStyle.g.negativeTextHover =
    "white""""";

  CoreStyle.g.negativeBorderHover =
    "#b52f2b""""";

  CoreStyle.g.negativeActive =
    "#a12926""""";

  CoreStyle.g.negativeTextActive =
    "white""""";

  CoreStyle.g.negativeBorderActive =
    "#a12926""""";

  CoreStyle.g.subdued =
    "#84959e""""";

  CoreStyle.g.subduedText =
    "white""""";

  CoreStyle.g.subduedBorder =
    "#84959e""""";

  CoreStyle.g.subduedHover =
    "#768993""""";

  CoreStyle.g.subduedTextHover =
    "white""""";

  CoreStyle.g.subduedBorderHover =
    "#768993""""";

  CoreStyle.g.subduedActive =
    "#697c86""""";

  CoreStyle.g.subduedTextActive =
    "white""""";

  CoreStyle.g.subduedBorderActive =
    "#697c86""""";

  CoreStyle.g.significant =
    "#00c6d7""""";

  CoreStyle.g.significantText =
    "white""""";

  CoreStyle.g.significantBorder =
    "#00c6d7""""";

  CoreStyle.g.significantHover =
    "#00afbe""""";

  CoreStyle.g.significantTextHover =
    "white""""";

  CoreStyle.g.significantBorderHover =
    "#00afbe""""";

  CoreStyle.g.significantActive =
    "#0097a4""""";

  CoreStyle.g.significantTextActive =
    "white""""";

  CoreStyle.g.significantBorderActive =
    "#0097a4""""";

  CoreStyle.g.warning =
    "#f0ad4e""""";

  CoreStyle.g.grey1 =
    "#f2f2f2""""";

  CoreStyle.g.grey2 =
    "#cfcece""""";

  CoreStyle.g.grey3 =
    "#b3b5b7""""";

  CoreStyle.g.grey4 =
    "#aeadad""""";

  CoreStyle.g.grey5 =
    "#686868""""";

  CoreStyle.g.grey6 =
    "#31313d""""";

  CoreStyle.g.headerNav =
    "#003245""""";

  CoreStyle.g.headerText =
    "white""""";

  CoreStyle.g.headerIcon =
    "#b6c6cb""""";

  CoreStyle.g.headerReverse =
    "#003245""""";

  CoreStyle.g.shadow =
    "0 2px 6px rgba(0, 0, 0, 0.3)""""";

  CoreStyle.g.shadowReverse =
    "0 -2px 6px rgba(0, 0, 0, 0.3)""""";

  CoreStyle.g.radius =
    "4px""""";

  CoreStyle.g.widthXS =
    "480px""""";

  CoreStyle.g.widthSM =
    "768px""""";

  CoreStyle.g.widthMD =
    "992px""""";

  CoreStyle.g.widthLG =
    "1167px""""";

  CoreStyle.g.widthMin =
    "320px""""";

  CoreStyle.g.widthMax =
    "1167px""""";

  CoreStyle.g.gutter =
    "16px""""";

  CoreStyle.g.columnGutter =
    "8px""""";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
