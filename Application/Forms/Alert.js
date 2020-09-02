import React from 'react';
import t from 'tcomb-form-native';

const Form = t.form.Form;

import SliderTemplate from './Templates/Slider'

export const Alert = t.struct({
    ActionPlan: t.String,
    AttackVector: t.String,
    Availability: t.String,
    CVE: t.String,
    Complexity: t.String,
    Confidentiality: t.String,
    Description: t.String,
    Editor: t.String,
    Integrity: t.String,
    ModificationDate: t.String,
    PrivilegesRequired: t.String,
    PublicationDate: t.String,
    Reference: t.String,
    Scope: t.String,
    ScoreCVSSV3: t.Number,
    UserInteraction: t.String,
    VulnerableComponentsOnSecurityWatchPerimeter: t.String
});

export const options={
    fields:{
        cve:{
            label: 'CVE (*)',
            placeholder: 'CVE'
        },
        editor:{
            label:'Editor (*)',
            placeholder:'Editor'
        },
        description:{
            label: 'Description (*)',
            placeholder: 'Descripcion de la Vuln',
            multiline: true,
            stylesheet:{
                ...Form.stylesheet,
                textbox:{
                    ...Form.stylesheet.textbox,
                    normal:{
                        ...Form.stylesheet.textbox.normal,
                        height:150
                    },
                    error:{
                        ...Form.stylesheet.textbox.error,
                        height:150
                    }
                }
            }
        },
        scoreCVSSv3:{
            label: 'Score',
            help: 'Score de la Alerta del Nist',
            config:{
                step:1,
                min:1,
                max:10,
            },
            template:SliderTemplate 
        },

    }
};


