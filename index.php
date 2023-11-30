<!doctype html>
<html>

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <title>contact form response</title>
    <style type="text/css">
        body {
            background-color: #b4fae1; /* Set the background color for the entire page */
        }

        #container {
            width: 800px;
            border: 1px solid black;
            padding: 10px;
            margin: 10px auto;
        }

        .colorRed {
            color: #F00;
        }
    </style>
</head>

<body>
    <!--close div container-->

    <hr>
    <p>&nbsp;</p>

    <?php
echo "<div style='margin: 20px; background-color: #f0f0f0; padding: 15px;'>";

// It will create a table and display one set of name value pairs per row
echo "<table style='border-collapse: collapse; width: 100%;' border='1'>";
echo "<tr style='background-color: #ddd;'><th style='padding: 10px;'>Field Name</th><th style='padding: 10px;'>Value of field</th></tr>";
foreach ($_POST as $key => $value) {
    echo '<tr style="border: 1px solid #ddd;">';
    echo '<td style="padding: 10px;">', $key, '</td>';
    echo '<td style="padding: 10px;">', $value, '</td>';
    echo "</tr>";
}
echo "</table>";
echo "</div>";
?>
</body>

</html>