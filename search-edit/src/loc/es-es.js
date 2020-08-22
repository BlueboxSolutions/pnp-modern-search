define([], function() {
  return {
    "ExtensibilityEditor" : {
      "PanelTitle":"Manage Third Party Extensibility Libraries",
      "PropertyPaneDescription": "Description",
      "BasicGroupName": "Group Name",
      "DescriptionFieldLabel": "Description Field",
      "Delete": "Delete",
      "NoExtensions": "No extensions in this library",
      "DisplayNameLabel": "Display Name",
      "IconLabel": "Icon",
      "NameLabel": "Name",
      "DescLabel": "Description",
      "AddPlaceholder": "Enter extensibility library GUID ...",
      "NoLibrariesAdded": "It's quiet in here. Enter the library manifest GUID to load third party extensibility.",
      "AddLibraryLabel": "Load Library",
      "EnterValidGuid": "Please enter a valid guid :).",
      "LibraryCouldNotBeLoaded": "The library could not be loaded. Please make sure the package is uploaded and the library GUID matches the value entered.",
      "LibraryHasNoExtensions": "The library was loaded successfully but contains no extensions. Please review the getExtensions method in the library you are trying to load.",
      "WebComponentLabel":"Web Component",
      "QueryModifierLabel":"Query Modifier",
      "SuggestionProviderLabel":"Suggestion Provider",
      "HandlebarsHelperLabel":"Handlebars Helper",
      "LibraryDescription":"Description: ",
      "LibraryGuid":"GUID: ",
      "LibraryAlreadyLoaded": "This library is already loaded. Please try another GUID :)."
    },
    "RefinementEditor" : {
      "CodeHeaderText": "Edit Refiner Template",
      "HeaderText": "Edit Refiners",
      "ApplyButtonLabel" : "Apply",
      "CancelButtonLabel": "Cancel",
      "ExportButtonLabel": "Export",
      "ImportButtonLabel": "ImportButtonLabel",
      "JsonFileRequiredMessage": "Please upload a json file",
      "ManagedPropertiesListPlaceHolder": "Select or add a managed property",      

      "SaveButtonLabel": "Guardar",
      "EditHandlebarsExpressionLabel": "Editar expresión de manillar",
      "AddHandlebarsExpressionDialogLabel": "Agregar expresión de manillar",
      "AvailableRefinersLabel": "Refinadores disponibles",
      "RefinerDisplayValueField": "Nombre del filtro para mostrar",            
      "RefinerTemplateField": "Plantilla de refinador",            

      "Templates": {
        "RefinerSortTypeSortDirectionAscending": "Ascendente",
        "RefinerSortTypeSortDirectionDescending": "Descendente",
        "RefinerSortTypeLabel": "Ordenar refinador por tipo",
        "RefinerSortTypeAlphabetical": "Alfabéticamente",
        "RefinerSortTypeByNumberOfResults": "Por número de resultados",
        "RefinerSortTypeSortOrderLabel": "Criterio de ordenación",
        "RefinementItemTemplateLabel": "Elemento de refinamiento predeterminado",
        "MutliValueRefinementItemTemplateLabel": "Elemento de refinamiento multivalor",
        "PersonaRefinementItemLabel": "Persona",
        "DateRangeRefinementItemLabel": "Rango Fecha",
        "FixedDateRangeRefinementItemLabel": "Rango Fecha (intervalos fijos)",
        "FileTypeRefinementItemTemplateLabel": "Tipos de archivos",
        "FileTypeMutliValueRefinementItemTemplateLabel": "Múltiples tipos de archivos",
        "ContainerTreeRefinementItemTemplateLabel": "Árbol de contenedores",                
        "CustomItemTemplateLabel": "Plantilla personalizada",
        "CustomEditLabel": "Edit Template"
      },
      "Sort": {
        "SortInvalidSortableFieldMessage": "",
        "SortInvalidSortableFieldMessage": "Esta propiedad no es ordenable"
      }
    }
  }
});