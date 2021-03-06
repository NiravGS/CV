export const confirm = (user, url) =>
  `
  <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,600;0,700;1,400;1,600&display=swap" rel="stylesheet">
    <style>
        body{
            font-family: poppins;
        }
    </style>
</head>

<body>
    <table border="0" cellpadding="0" cellspacing="0" style="max-width:600px;" width="100%" class="wrapperBody" align="center">
        <tbody>
            <tr>
                <td align="center" valign="top">

                    <!-- Table Card Open // -->
                    <table border="0" cellpadding="0" cellspacing="0"
                        style="background-color:#FFFFFF;border-color:#E5E5E5; border-style:solid; border-width:0 1px 1px 1px;"
                        width="100%" class="tableCard">

                        <tbody>
                            <tr>
                                <!-- Header Top Border // -->
                                <td height="3" style="background-color:#f58434;font-size:1px;line-height:3px;"
                                    class="topBorder">&nbsp;</td>
                            </tr>


                            <tr>
                                <td align="center" valign="top" style="padding-bottom: 20px;" class="imgHero">
                                    <!-- Hero Image // -->
                                    <a href="#" target="_blank" style="text-decoration:none;">
                                        <img src="https://mcusercontent.com/1799bbb194809b3f5958a7dbb/images/fcd1470a-ffad-46dd-a7bf-f6e70ef244c2.png"
                                            width="600" alt="" border="0"
                                            style="width:100%; max-width:600px; height:auto; display:block;">
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td align="center" valign="top"
                                    style="padding-bottom: 5px; padding-left: 20px; padding-right: 20px;"
                                    class="mainTitle">
                                    <!-- Main Title Text // -->
                                    <h2 class="text"
                                        style="color:#000000; font-family:'Poppins', Helvetica, Arial, sans-serif; font-size:28px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:36px; text-transform:none; text-align:center; padding:0; margin:0">
                                        Hi "${user.company_name}"
                                    </h2>
                                </td>
                            </tr>

                            <tr>
                                <td align="center" valign="top"
                                    style="padding-bottom: 30px; padding-left: 20px; padding-right: 20px;"
                                    class="subTitle">
                                    <!-- Sub Title Text // -->
                                    <h4 class="text"
                                        style="color:#999999; font-family:'Poppins', Helvetica, Arial, sans-serif; font-size:16px; font-weight:500; font-style:normal; letter-spacing:normal; line-height:24px; text-transform:none; text-align:center; padding:0; margin:0">
                                        Verify Your Email Account
                                    </h4>
                                </td>
                            </tr>

                            <tr>
                                <td align="center" valign="top" style="padding-left:20px;padding-right:20px;"
                                    class="containtTable ui-sortable">

                                    <table border="0" cellpadding="0" cellspacing="0" width="100%"
                                        class="tableDescription" style="">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top" style="padding-bottom: 20px;"
                                                    class="description">
                                                    <!-- Description Text// -->
                                                    <p class="text"
                                                        style="color:#666666; font-family:'Open Sans', Helvetica, Arial, sans-serif; font-size:14px; font-weight:400; font-style:normal; letter-spacing:normal; line-height:22px; text-transform:none; text-align:center; padding:0; margin:0">
                                                        Thanks for Joining Us. You recently created an account on our platform AcrossNeeds. Click the button to verify your email.
                                                    </p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="tableButton">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top"
                                                    style="padding-top:20px;padding-bottom:20px;">

                                                    <!-- Button Table // -->
                                                    <table align="center" border="0" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td align="center" class="ctaButton"
                                                                    style="background-color: #f38435;;padding-top:12px;padding-bottom:12px;padding-left:35px;padding-right:35px;border-radius:50px">
                                                                    <!-- Button Link // -->
                                                                    <a class="text" href="${url}" target="_blank"
                                                                        style="color:#FFFFFF; font-family:'Poppins', Helvetica, Arial, sans-serif; font-size:13px; font-weight:600; font-style:normal;letter-spacing:1px; line-height:20px; text-transform:uppercase; text-decoration:none; display:block">
                                                                        Verify Now
                                                                    </a>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>

                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </td>
                            </tr>

                            <tr>
                                <td height="20" style="font-size:1px;line-height:1px;">&nbsp;</td>
                            </tr>

                            <tr>
                                <td align="center" valign="middle" style="padding-bottom:40px" class="emailRegards">
                                    <!-- Image and Link // -->
                                    <a href="#" target="_blank" style="text-decoration:none;">
                                        <img mc:edit="signature"
                                            src="https://mcusercontent.com/1799bbb194809b3f5958a7dbb/images/09fbb40d-7c0d-495d-b311-e9d90b26b2f1.png" alt=""
                                            width="150" border="0" style="width:100%;
    max-width:150px; height:auto; display:block;">
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <!-- Table Card Close// -->

                    <!-- Space -->
                    <table border="0" cellpadding="0" cellspacing="0" width="100%" class="space">
                        <tbody>
                            <tr>
                                <td height="30" style="font-size:1px;line-height:1px;">&nbsp;</td>
                            </tr>
                        </tbody>
                    </table>

                </td>
            </tr>
        </tbody>
    </table>
</body>

</html>
  `;

document.write(confirm);