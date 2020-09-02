import React from 'react';
import t from 'tcomb-form-native';

const Form = t.form.Form;

import SliderTemplate from './Templates/Slider'

export const Framework = t.struct({
    HorsScopeCAP: t.Number,
    Treatment: t.String,
    actionPlan: t.String, 
    anneeAlerte:t.Number,
    anneeClos:t.Number,
    attackVector:t.String,
    availability:t.String,
    comments:t.String,
    complexity:t.String,
    confidentiality:t.String,
    cve:t.String,
    dateAlerte:t.Number,
    dateCloture:t.Number,
    dateFinTraitementCrise:t.Number,
    dateFinTraitementUrgent:t.Number,
    description:t.String,
    editor:t.String,
    exploit:t.String,
    integrity:t.String,
    modeDeTraitement:t.String,
    modificationDate:t.Number,
    moisAlerte:t.Number,
    moisClos:t.Number,
    priority:t.String,
    privilegesRequired: t.String,
    publicationDate:t.Number,
    reference:t.String,
    scope:t.String,
    scoreCVSSV3:t.Number,
    tempsDeRemediation:t.Number,
    traitementCrise:t.String,
    traitementObso:t.String,
    traitementParCAP:t.String,
    traitementProjet:t.String,
    traitementStandard:t.String,
    traitementUrgent:t.String,
    userInteraction:t.String,
    vulnerableComponentsOnSecurityWatchPerimeter:t.String
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
            help: 'Score de la Vuln',
            config:{
                step:1,
                min:1,
                max:10,
            },
            template:SliderTemplate 
        },

    }
};


