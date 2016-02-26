/// <reference path="buttonBase.d.ts" />
declare module ecspand.Templates.Elements {
    class Element_buttonTemplatesDefault extends ecspand.Templates.Elements.Element_buttonBase {
        CLASS_NAME: string;
        templateID: string;
        transcripts: ecspand.Controls.Transcripts;
        list: SP.List;
        name: string;
        hoverPanel: ecspand.Controls.HoverPanel;
        templatesHelper: ecspand.ControlHelper.Templates;
        isEnabled(): JQueryPromise<boolean>;
        initInternal(): JQueryPromise<any>;
        loadSharePointTemplates(): void;
        loadEcspandTemplates(): void;
        onHoverPanelTemplatesExistMouseClick(e: any): void;
        onHoverPanelMouseClick(e: any): void;
        getConfigSettings(): any;
        getDefaultViewModel(): any;
    }
}
