declare module ecspand.Templates.Elements {
    class Element_buttonBase extends ecspand.Templates.ElementBase {
        CLASS_NAME: string;
        elementArray: kendo.data.ObservableArray;
        templateID: string;
        name: string;
        constructor(template: ecspand.Templates.TemplateBase, config: any, elementArray: kendo.data.ObservableArray, options?: ecspand.Templates.ElementBaseOptions);
        init(): JQueryPromise<any>;
        _addElement(viewModel: any): void;
        _insertElement(viewModel: {
            index: number;
        }): void;
        getDefaultViewModel(): any;
        getEditViewModel(extend?: any): JQueryPromise<any>;
        getConfigSettings(): any;
        get_hidden(): boolean;
        onClick(e: any): void;
        destroy(): void;
    }
}
