<?php

include 'lib/fpdf.php';
include 'lib/funciones.php';

class PDFs extends FPDF
{
    public $col = 0;

    public function header()
    {
       
        $NoCorrelativo = 1;
        $bordesH      = 0;
        $correlativos = str_pad($NoCorrelativo, 9, "0", STR_PAD_LEFT);
        // Total de la pagina  ancho 205    alto 216

        //aqui pones imagen si queres
        //$this->Image("../../images/$ImagenEmpresa", 10, 10, 30, 30, 'jpg');
        //$this->RoundedRect(5, 16, 205, 27, 3, $corners = '1234');
        
        $this->SetFont('arial', 'B', 12);
        $this->SetTextColor(0, 0, 0);

        $this->Ln(8);
        $this->Cell(50, 5, ' ', $bordesH, 0, 'L');
        $this->Cell(100, 5, '"NomEmpresa"', $bordesH, 0, 'C');
        $this->Cell(25, 5, "Cotizacion", $bordesH, 0, 'C');

        $this->Ln();
        $this->Cell(50, 5, ' ', $bordesH, 0, 'L');
        $this->SetFont('arial', '', 10);
        $this->Cell(100, 5, "Dir 1", $bordesH, 0, 'C');
        $this->SetFont('arial', 'B', 12);
        $this->Cell(25, 5, 'NO.: ', $bordesH, 0, 'C');
        $this->SetTextColor(227, 0, 0);
        $this->Cell(25, 5, $correlativos, $bordesH, 0, 'L');
        $this->SetTextColor(0, 0, 0);

        $this->Ln();
        $this->SetFont('arial', '', 10);
        $this->Cell(50, 5, ' ', $bordesH, 0, 'L');
        $this->Cell(100, 5, "dir linea 2", $bordesH, 0, 'C');
        $this->SetFont('arial', 'B', 12);

        $this->Ln();
        $this->SetFont('arial', '', 10);
        $this->Cell(50, 5, ' ', $bordesH, 0, 'L');
        $this->Cell(100, 5, 'Tel(s): 4565466', $bordesH, 0, 'C');
        $this->SetFont('arial', 'B', 12);

        /*************************************************************** */
        $this->Ln(21);
        $this->SetFont('arial', 'B', 12);
        $this->Cell(22, 5, 'NOMBRE:', $bordesH, 0, 'L');
        $this->SetFont('arial', '', 10);
        $this->Cell(131, 5, $_GET['NombreFac'], $bordesH, 0, 'L');

        $this->SetFont('arial', 'B', 12);
        $this->Cell(23, 5, 'FECHA:', $bordesH, 0, 'R');
        $this->SetFont('arial', '', 10);
        $this->Cell(25, 5, date("d-m-Y"), $bordesH, 0, 'L');
        /*************************************************************** */
        $this->Ln(10);
        $this->SetFont('arial', 'B', 12);
        $this->Cell(27, 5, 'DIRECCION:', $bordesH, 0, 'L');
        $this->SetFont('arial', '', 10);
        $this->Cell(136, 5, $_GET['Direccion'], $bordesH, 0, 'L');

        $this->SetFont('arial', 'B', 12);
        $this->Cell(13, 5, 'NIT:', $bordesH, 0, 'R');
        $this->SetFont('arial', '', 10);
        $this->Cell(25, 5, $_GET['NIT'], $bordesH, 0, 'L');

        /******************AREA DE DATOS EXTRA************************* */
        //$bordesH = 1;
        $this->Ln(12);
        $this->SetX(10);
        $this->SetFont('arial', 'B', 10);
        $this->Cell(25, 5, 'Cod. Coti.', $bordesH, 0, 'C');
        $this->Cell(50, 5, 'Vendedor', $bordesH, 0, 'C');
        $this->Cell(25, 5, 'Sucursal', $bordesH, 0, 'C');
        $this->Cell(20, 5, 'Contado', $bordesH, 0, 'C');
        $this->Cell(20, 5, 'Credito', $bordesH, 0, 'C');
        $this->Cell(20, 5, 'Otros', $bordesH, 0, 'C');

        $this->Ln(6);
        $this->SetX(10);
        $this->SetFont('arial', '', 10);
        $this->Cell(25, 5, "1", $bordesH, 0, 'C');
        $this->Cell(50, 5, "cmoran", $bordesH, 0, 'C');
        $this->Cell(25, 5, "1", $bordesH, 0, 'C');
        $this->Cell(20, 5, "x", $bordesH, 0, 'C');
        $this->Cell(20, 5, "x", $bordesH, 0, 'C');
        $this->Cell(20, 5, "x", $bordesH, 0, 'C');

        // 1= Esquina Izquierda Superior
        // 2= Esquina Derecha Superior
        // 3= Esquina Derecha Inferior
        // 4= Esquina Izquierda Inferior
        // Izquierda, Arriba,Ancho,largo,tamaño redondeado
        $Alto  = 75;
        $Largo = 13;
        $this->RoundedRect(5, $Alto, 30, $Largo, 3, $corners = '1');
        $this->RoundedRect(35, $Alto, 50, $Largo, 3, $corners = '');
        $this->RoundedRect(85, $Alto, 25, $Largo, 3, $corners = '');
        $this->RoundedRect(110, $Alto, 20, $Largo, 3, $corners = '');
        $this->RoundedRect(130, $Alto, 20, $Largo, 3, $corners = '');
        $this->RoundedRect(150, $Alto, 20, $Largo, 3, $corners = '');
        $this->RoundedRect(170, $Alto, 40, $Largo, 3, $corners = '2');

        $Titulos = array(
            array("Titulo" => "CODIGO", "Ancho" => 35),
            array("Titulo" => "CANT", "Ancho" => 15),
            array("Titulo" => "DESCRIPCION", "Ancho" => 115),
            array("Titulo" => "P. Uni", "Ancho" => 20),
            array("Titulo" => "SubT", "Ancho" => 20),
        );
        $Comienzo = 5;
        foreach ($Titulos as $row) {
            $this->RoundedRect($Comienzo, 88, $row['Ancho'], 8, 3, $corners = '');
            $Comienzo = $Comienzo + $row['Ancho'];
        }
        $bordesH = 1;
        $this->SetTextColor(255, 255, 255);
        $this->SetFillColor(140, 140, 140);
        $this->Ln(6);
        $this->SetX(5);
        $this->SetFont('arial', 'B', 11);
        $this->Cell(35, 8, 'CODIGO', $bordesH, 0, 'C', 1);
        $this->Cell(15, 8, 'CANT', $bordesH, 0, 'C', 1);
        $this->Cell(115, 8, 'DESCRIPCION', $bordesH, 0, 'C', 1);
        $this->Cell(20, 8, 'P. Uni', $bordesH, 0, 'C', 1);
        $this->Cell(20, 8, 'SubT', $bordesH, 0, 'C', 1);
        $this->SetFont('arial', '', 9);
        $this->Ln(10);

    }

    public function footer()
    {
        if (!isset($this->footer[$this->page]) || !$this->footer[$this->page]) {
            $this->SetTextColor(0, 0, 0);
            $this->SetFont('times', 'B', 10);
            $this->SetY(-10);
            $this->AliasNbPages();
            //$this->Image('../../../images/inferior.png', -1, 265, 218, 15, 'PNG');
            $this->Cell(0, 5, $this->PageNo() . '/{nb}', 0, 0, 'R');
        }
    }
}


$border = 0;
$pdf    = new PDFs();
$pdf->AddPage('PORTRAIT', 'letter');
$pdf->SetMargins(5, 10, 10);
$pdf->SetFillColor(230, 72, 72);
$no = 0;
$no2 = 0 ;
$pdf->SetWidths(array(35,15,115,20,20));
$pdf->SetAligns(array('L','C','L','C','C'));


//AQUI ES DONDE PONES LOS ARTICULOS QUE LLEVAN PRECIO O LO QUE QUERRAS
for ($i=0; $i < 10; $i++) { 
    $pdf->Row(array("0000$i",number_format("1",0),"aaaa",number_format("1",2),number_format("2",2)));
}


//$TotalLetras = valorEnLetras($TotalVentas,1);
$Altura = $pdf->GetY();
$Altura2 = (96 + $Altura);
/*************************CUADRO QUE ENCUADRA LOS DETALLES****************** */
$pdf->SetFont('arial', 'B', 10);
$Altu = (($pdf->GetY() - 96) + 1);
$pdf->RoundedRect(5, 96, 35, $Altu, 3, $corners = ''); // cuadro general de abajo
$pdf->RoundedRect(40, 96, 15, $Altu, 3, $corners = '');
$pdf->RoundedRect(55, 96, 115, $Altu, 3, $corners = '');
$pdf->RoundedRect(170, 96, 20, $Altu, 3, $corners = '');
$pdf->RoundedRect(190, 96, 20, $Altu, 3, $corners = '');

$Altu = ($pdf->GetY() + 1);
$pdf->RoundedRect(5, $Altu, 165, 13, 3, $corners = '4');
$pdf->RoundedRect(170, $Altu, 20, 13, 3, $corners = '');
$pdf->RoundedRect(190, $Altu, 20, 13, 3, $corners = '3');
$bordesH = 0;
$pdf->SetFont('arial', 'B', 10);
$pdf->Ln(0);
$pdf->SetX(5);
//$TotalLetras = valorEnLetras("135.25",1);
$pdf->Cell(165, 13,"a asdfads", $bordesH, 0, 'L', 0);
$pdf->Cell(20, 13, 'TOTAL Q.', $bordesH, 0, 'C', 0);
$pdf->Cell(20, 13, number_format("0",2), $bordesH, 0, 'C', 0);
$pdf->SetFont('arial', 'B', 10);
$pdf->Ln(18);
$pdf->MultiCell(0, 5, utf8_decode("Gracias por contratar nuestros servicios por medio de la presente enviamos cotización, Favor tomar en cuenta que el precio está sujeto a la disponibilidad del producto. "));

$pdf->SetFont('arial', '', 9);





$pdf->OutPut(null, "cotizacion.pdf");
