import BaseTemplateService from                    './BaseTemplateService';
import ResultsLayoutOption from '../../models/ResultsLayoutOption';
import { ISearchResultsWebPartProps } from '../../webparts/searchResults/ISearchResultsWebPartProps';
import { IComboBoxOption } from 'office-ui-fabric-react/lib/ComboBox';
import { TemplateService } from './TemplateService';
import MockSearchService from '../SearchService/MockSearchService';
import { IPropertyPaneField } from '@microsoft/sp-property-pane';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import ISearchService from '../SearchService/ISearchService';
import { IExtensibilityService } from 'search-extensibility';

class MockTemplateService extends BaseTemplateService {

    private ctx: WebPartContext;
    private searchService: ISearchService;
    private _extensibilityService: IExtensibilityService;

    constructor(locale: string, ctx : WebPartContext, searchService:ISearchService, extensibilityService: IExtensibilityService) {
        super(ctx, searchService);    

        this.ctx = ctx;
        this.searchService = searchService;
        this._extensibilityService = extensibilityService;
        this.CurrentLocale = locale;
    }

    private readonly _mockFileContent: string = require('../../templates/layouts/mock.html');

    public getFileContent(fileUrl: string): Promise<string> {

        const p1 = new Promise<string>((resolve) => {
            setTimeout(() => {
                resolve(this._mockFileContent);
            }, 1000);
        });

        return p1;
    }

    public ensureFileResolves(fileUrl: string): Promise<void> {
        return Promise.resolve();
    }

    public getTemplateParameters(layout: ResultsLayoutOption, properties: ISearchResultsWebPartProps, onUpdateAvailableProperties?: (properties: IComboBoxOption[]) => void, availableProperties?: IComboBoxOption[]): IPropertyPaneField<any>[] {
        
        const templateService = new TemplateService(null, this.CurrentLocale, this.searchService, this._extensibilityService, null, this.ctx);
        return templateService.getTemplateParameters(layout, properties, onUpdateAvailableProperties);
    }
}

export default MockTemplateService;