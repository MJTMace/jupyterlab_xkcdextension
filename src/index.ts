import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the jupyterlab_xkcdextension extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'jupyterlab_xkcdextension',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension jupyterlab_xkcdextension is activated!');
  }
};

export default extension;
