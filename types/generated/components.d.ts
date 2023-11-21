import type { Schema, Attribute } from '@strapi/strapi';

export interface MarksExperiments extends Schema.Component {
  collectionName: 'components_marks_experiments';
  info: {
    displayName: 'Experiments';
    description: '';
  };
  attributes: {
    observation: Attribute.Integer;
    output: Attribute.Integer;
    viva: Attribute.Integer;
    total: Attribute.Integer;
    ExpNo: Attribute.Integer;
    Submitted_Date: Attribute.Date;
    outputContent: Attribute.String;
    code: Attribute.RichText;
  };
}

export interface MarksProgress extends Schema.Component {
  collectionName: 'components_marks_progresses';
  info: {
    displayName: 'progress';
  };
  attributes: {
    experiment: Attribute.String;
    codeId: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'marks.experiments': MarksExperiments;
      'marks.progress': MarksProgress;
    }
  }
}
