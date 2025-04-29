/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Accueil'
    },
    {
      type: 'category',
      label: 'Reprise des marchés SAFI',
      items: [
        'SAFI/presentation',
        'SAFI/A_Initialisation',
        'SAFI/B_CreationNouveauMarche'
      ]
    },
    {
      type: 'category',
      label: 'Mémo Javascript',
      items: [
        'memo-javascript/general'
      ]
    }
  ]
};

module.exports = sidebars; 