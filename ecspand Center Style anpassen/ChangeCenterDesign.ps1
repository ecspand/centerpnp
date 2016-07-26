#
###############################################################################################################################
# Bitte ausfüllen
#
# Geben Sie hier die neuen Farbwerte an. Wichtig: Achten Sie auf die Darstellung Hex und RGB
# Die beiden CSS-Dateien Fileview und Kendo werden zusammengefasst, um diese später in der Inhaltskonfiguration des Centers nachzuladen
$Color1New = "005da8" # Hex
$Color2New = "0,93,168" # RGB
$Color3New = "156,206,240" # RGB
$Color4New = "153,199,232" # RGB

# Geben Sie hier den Pfad der beiden ecspand Center CSS-Dateien an
$CssDateiPfadFielView = "C:\ecspandDesign\Styles\FileView.min.css"
$CssDateiPfadKendo = "C:\ecspandDesign\Styles\kendo.ecspand.min.css"




################################################################################################################################
################################################################################################################################
# Nicht verändern
#
# Initialisierung der Farben
$Color1 = "0072c6"
$Color2 = "0,114,198" 
$Color3 = "156,206,240"
$Color4 = "153,199,232"


function Change-CenterDesign{
    param(
        [String]$CssPathFileView,
        [String]$CssPathKendoo
    )
    
    #$NewFileName = $CssPath.Substring($CssPath.LastIndexOf("\")+1);
    #$NewFileName = "New_$NewFileName";
    $NewFileName = "CustomCenter.css"
    $NewFilePath = $CssPathFileView.Substring(0, $CssPathFileView.LastIndexOf("\")+1);
    $NewFilePath = $NewFilePath + $NewFileName

    [String]$CssFile = Get-Content $CssPathFileView;
    [String]$CssFile2 = Get-Content $CssPathKendoo;

    # Fileview
    
    $CssFileNew = $CssFile.Replace($color1, $Color1New);
    $CssFileNew = $CssFileNew.Replace($color2, $Color2New);
    $CssFileNew = $CssFileNew.Replace($color3, $Color3New);
    $CssFileNew = $CssFileNew.Replace($color4, $Color4New);

    # Kendoo
    $CssFileNew2 = $CssFile2.Replace($color1, $Color1New) 


    $CssFileNew = $CssFileNew, "" ,$CssFileNew2
    write-host "$newFilePath"
    write-host "Schreibe Datei $NewFileName"

    $CssFileNew | Out-File $NewFilePath;

}


Change-CenterDesign -CssPathFileView $CssDateiPfadFielView -CssPathKendoo $CssDateiPfadKendo


