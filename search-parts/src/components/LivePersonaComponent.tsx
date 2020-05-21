import * as React from 'react';
import { SPComponentLoader } from "@microsoft/sp-loader";
import { Log } from '@microsoft/sp-core-library';
import { WebPartContext } from '@microsoft/sp-webpart-base';
import { BaseWebComponent, IExtensionContext } from 'search-extensibility';
import * as ReactDOM from 'react-dom';
import * as DOMPurify from 'dompurify';

const LIVE_PERSONA_COMPONENT_ID: string = "914330ee-2df2-4f6e-a858-30c23a812408";

export interface ILivePersonaComponentProps {

    /**
     * The Web Part context
     */
    ctx: IExtensionContext;

    /**
     * The user UPN to use for the live information
     */
    upn?: string;

    /**
     * If info should not appear on hover
     */
    disablehover?: boolean;

    /**
     * The content to wrap with persona info
     */
    template?: string;
}

export interface ILivePersonaComponentState {

    /**
     * Indicates if the SPFx component is loaded and ready to be used
     */
    isComponentLoaded: boolean;
}

export class LivePersonaComponent extends React.Component<ILivePersonaComponentProps, ILivePersonaComponentState> {

    private sharedLibrary: any;
    
    public constructor(props: ILivePersonaComponentProps) {
        super(props);

        this.state = {
            isComponentLoaded: false,
        };

        this.sharedLibrary = null;
    }

    public render() {

        let renderPersona: JSX.Element = null;

        if (this.state.isComponentLoaded) {
            renderPersona = React.createElement(this.sharedLibrary.LivePersonaCard, {
                className: 'livePersonaCard',
                clientScenario: "PeopleWebPart",
                disableHover: this.props.disablehover,
                hostAppPersonaInfo: {
                  PersonaType: "User"
                },
                upn: this.props.upn,
                serviceScope: this.props.ctx.webPart.serviceScope,
              }, <div dangerouslySetInnerHTML={{ __html: DOMPurify.default.sanitize(this.props.template) }}></div>);
        }
        return renderPersona;
    }

    public async componentDidMount() {
        await this._loadSpfxSharedLibrary();
    }

    private async _loadSpfxSharedLibrary() {

        if (!this.state.isComponentLoaded) {

            try {

                this.sharedLibrary = await SPComponentLoader.loadComponentById(LIVE_PERSONA_COMPONENT_ID);   

                this.setState({
                    isComponentLoaded: true
                });
    
            } catch (error) {
               Log.error(`[LivePersona_Component]`, error, this.props.ctx.webPart.serviceScope);
            }
        }        
    }
}

export class LivePersonaWebComponent extends BaseWebComponent {
   
    constructor() {
        super();
    }
 
    public connectedCallback() {
 
       let props = this.resolveAttributes();
       const livePersonaItem = <LivePersonaComponent {...props} ctx={this.context}/>;
       ReactDOM.render(livePersonaItem, this);
    }    
}