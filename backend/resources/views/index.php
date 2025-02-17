<!DOCTYPE html>
<html>

<head>
    <!-- Fonts -->
    <link href='https://fonts.googleapis.com/css?family=Barlow Semi Condensed' rel='stylesheet'>

    <!-- Font Awesome -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/fontawesome.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/solid.min.css" rel="stylesheet"/>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/regular.min.css" rel="stylesheet"/>

    <!-- JQuery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.11.0/umd/popper.min.js" integrity="sha384-b/U6ypiBEHpOf/4+1nzFpr53nxSS+GLCkfwBdFNTxtclqqenISfwAzpKaMNFNmj4" crossorigin="anonymous"></script>

    <!-- Bootstrap & Material Icons -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css" integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js" integrity="sha384-h0AbiXch4ZDo7tp9hKZ4TsHbi047NrKGLO3SEJAg45jXxnGIfYzk4Si90RDIqNm1" crossorigin="anonymous"></script>
    <!-- <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/material-design-icons/3.0.1/iconfont/material-icons.min.css"> -->

    <!-- CSS -->
    <link rel="stylesheet" href="<?php echo asset('static/css/style.css')?>">

    <title>TimNem | Home</title>
</head>

<body>
    <div class="bg">
    <nav class="navbar navbar-expand-lg navbar-light bg-light" style="font-family: 'Barlow Semi Condensed';width: 100%;">
        <div class="d-flex flex-grow-1">
            <span class="w-100 d-lg-none d-block"><!-- hidden spacer to center brand on mobile --></span>
            <a class="navbar-brand d-none d-lg-inline-block" href=".">
                <h2 style="display:inline; color:#00705c;"><b>TIMNEM</b></h2>
            </a>
            <div class="w-100 text-right">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#myNavbar">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </div>
    </nav>
    <div class="row h-100 align-items-center justify-content-center">
        <div class="col-sm-12 mx-auto text-center">
            <h1 style="color:#ffffff; font-family:'Barlow Semi Condensed';"><b>STONKS</b></h1>
            <br><br>
            
            <div class="input-group mx-auto mycustom" style="width:50%;">
                <select class="input-ol form-control" id="searchMenu" style="width:630px; border-radius:30px; font-family:'Barlow Semi Condensed';" aria-describedby="inputGroupPrepend2" placeholder="Search for industry...">
                    <option selected disabled>Select an industry</option>
                </select>
                <br>
                <button class="btn btn-secondary action barlow" id="searchbtn">Get Companies</button>
              </div>
        </div>
    </div>
    </div>
    <script type="text/javascript" src="../static/js/functions.js"></script>
    <script type="text/javascript">
        $(document).ready(async function(){
            var industries = await getAllIndustries();
            industries.forEach(industryJSON => {
                $("#searchMenu").append(`<option value="${industryJSON.name}">${industryJSON.name}</option>`);
            });
        })
    </script>
</body>



</html>