import '../css/main.css';

const Button = ({ children, btn,hover,active }) => {
    return (
        <button btn={btn} hover={hover} active={active}>
            {children}
        </button>
    );
};

const ButtonBorder = ({ children, btn,hover,active }) => {
    return (
        <button btnBR={btn} hover={hover} active={active}>
            {children}
        </button>
    );
};

const Alert = ({ children, alert }) => {
    return (
        <article alert={alert}>
            {children}
        </article>
    );
};

const Loading = () => {
    return (
        <div loading-bar>
            <div process-loadingbar></div>
        </div> 
    );
};

const SantButton = ({ children, type }) => {
    return (
        <button santbutton={type}>{children}</button>
    );
};

const SwitchButton = ({type}) => {
    if (type === "light") {
        return (
            <label switch-ios-label>
                <input type="checkbox" switch-ios-input />
                <span switch-ios-slider switch-ios-round></span>
            </label>
        );
    } else if (type === "dark") {
        return (
            <label switch-ios-label>
                <input type="checkbox" switch-ios-input/>
                <span switch-ios-slider-dark switch-ios-round></span>
            </label>
        );
    }

};

const GroupButton = ({ children,type }) => {
    if (type === "normal") {
        return (
            <div group-btn-div-rol role="group">
                {children}
            </div>
        );
    } else if(type === "rol") {
        return (
            <div group-btn-div role="group">
                {children}
            </div>
        );
    }

};

const RadioButtons = ({ children }) => {
    return (
    <div radio-input-div>
        {children}
    </div>
    );
};

const Tabs = ({ children,type,image }) => {
   if (type === "theme1") {
    return (
        <div>
            <button tabs-tab-button-theme1><img src={image} /> <br /> <span>{children}</span> </button>
        </div>
    );
   } else if (type === "theme2") {
    return (
        <div>
            <button tabs-tab-button-theme2><img src={image} /> <br /> <span>{children}</span> </button>
        </div>
    );
   } else if (type === "theme3") {
    return (
        <div>
            <button tabs-tab-button-theme3><img src={image} /> <br /> <span>{children}</span> </button>
        </div>
    );
   }
};

const Modal = ({ type, service,discription ,plan,price,priceDate,Btn }) => {
    if (type === "dialog") {
     return (
        <div dialog-modal-div>
            <div dialog-modal-div2>
                <p>{service}</p>
                <span>{discription}</span>
                <hr />
                <div dialog-modal-dialog-actions>
                    <button dialog-model-dialog-button dialog-model-dialog-button_YesEnable>Yes, enable</button>
                    <hr/>
                    <button dialog-model-dialog-button dialog-model-dialog-button_NoThanks>No thanks</button>
                </div>
            </div>
        </div>
     );
    } else if (type === "pricing") {
     return (
        <div pricing-modal-div>
            <span pricing-modal-price>{plan}</span>
            <hr/>
            <b><p> {price} </p> /{priceDate}</b>
            <div pricing-modal-options-div>
            <p>{discription}</p>
            </div>
            <button btnBR="primary" hover="true" active="true">{Btn}</button>
        </div>
     );
    } 

};

export { 
    Button ,
    ButtonBorder ,
    Alert ,
    Loading ,
    SantButton ,
    SwitchButton ,
    GroupButton ,
    RadioButtons ,
    Tabs ,
    Modal ,
}