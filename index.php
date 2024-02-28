<!DOCTYPE html>
<html>
<head>
    <title>Calculadora de Área de Cuadrado</title>
</head>
<body>

<?php
// Verifica si se ha enviado el formulario
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtiene el valor del lado del cuadrado desde el formulario
    $lado = $_POST["lado"];

    // Calcula el área del cuadrado
    $area = $lado * $lado;
    
    // Muestra el resultado
    echo "<h2>Área del Cuadrado:</h2>";
    echo "<p>El área del cuadrado con lado $lado unidades es: $area unidades cuadradas.</p>";
}
?>

<!-- Formulario para ingresar el lado del cuadrado -->
<form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]);?>">
    <label for="lado">Ingrese el lado del cuadrado:</label>
    <input type="number" name="lado" required>
    <br><br>
    <input type="submit" value="Calcular Área">
</form>

</body>
</html>
