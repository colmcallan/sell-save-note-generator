//The Below functions are all button selections of products and their corresponding
//troubleshooting step options with resolution steps taken
//they all feed into the text area in the modal 
//associated with the "generate" button
//All utiliszing the jquery toggle function
//<!--All code used in this is copyright to Colm Callan, colm.callan@sky.ie-->

//attraction call option
$(document).ready(function() {
  $("#AttrButton").click(function() {
    $("#attraction").toggle();
  });
});

//Attraction add on subs. hides attraction options when clicked.
$(document).ready(function() {
  $("#attraddon").click(function() {
    $("#attrcthide").hide();
    $("#attractionaddon").toggle();
  });
});
//save, Turn around. 
$(document).ready(function() {
  $("#turnrnd").click(function() {
    $("#trnarnd").toggle();
  });
});
//save, Turn around. 
$(document).ready(function() {
  $("#loyalty").click(function() {
    $("#hidetrnarnd").hide();
    $("#loyaltyscn").toggle();
  });
});
//PAT
$(document).ready(function() {
  $("#patbbtn").click(function() {
    $("#pat").toggle();
  });
});
$(document).ready(function() {
  $("#patoptions").click(function() {
    $("#hidepat").hide();
    $("#patscn").toggle();
  });
});
//Sky Sports Upgrade
$(document).ready(function() {
  $("#sportsup").click(function() {
    $("#Sportsupgrd").toggle();
  });
});

//cinema upgrade button
$(document).ready(function() {
  $("#cinemaupgrd").click(function() {
    $("#Cinemaupgrade").toggle();
  });
});

//FTTH
$(document).ready(function() {
  $("#toptierupgrd").click(function() {
    $("#toptierupgrade").toggle();
  });
});
//FTTH troubleshooting
$(document).ready(function() {
  $("#baseupgrd").click(function() {
    $("#baseupgrade").toggle();
  });
});

//Sky Talk
$(document).ready(function() {
  $("#standaloneupg").click(function() {
    $("#standaloneupgrade").toggle();
  });
});

//Talk troubleshooting
$(document).ready(function() {
  $("#prodctsupgrade").click(function() {
    $("#productsupgrade").toggle();
  });
});

//Billing
$(document).ready(function() {
  $("#prdctbtnBill").click(function() {
    $("#BILLING1").toggle();
  });
});

//Upgrade Downgrade
$(document).ready(function() {
  $("#cancellation").click(function() {
    $("#cancellationdowngrade").toggle();
  });
});

//upgrade
$(document).ready(function() {
  $("#prdctbtnUpgrd").click(function() {
    $("#UPGRADE1").toggle();
  });
});


//homemove/engineerbutton
$(document).ready(function() {
  $("#prdctbtnHmmove").click(function() {
    $("#HomeMove1").toggle();
  });
});
//End of product/resolution buttons

//feed into text area when checked
$(document).ready(function() {
  $('.notes').click(function() {
    var text = "";
    $('.notes:checked').each(function() {
      text += $(this).val() + ',';
    });
    text = text.substring(0, text.length - 1);
    $('#selectedtext').val(text);
  });
});

//clear text function in texxttarea
var input = document.querySelector('#clear');
var textarea = document.querySelector('#selectedtext');

input.addEventListener('click', function() {
  textarea.value = '';
}, false);

//refresh page
function refreshPage() {
  window.location.reload();
}
