declare module ecspand.Templates.Elements {
    class DefaultDialog_imageViewer extends DefaultDialogBase {
        name: string;
        constructor(template: ecspand.Templates.TemplateBase);
        enabled(): JQueryPromise<boolean>;
        click(): void;
        onDialogClose(result: any): void;
    }
}
