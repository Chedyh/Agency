import { Injectable } from '@angular/core';

interface Scripts {
  name: string;
  src: string;
}

export const ScriptStore: Scripts[] = [
  { name: 'cloudfare', src: '../../../assets/scripts/5c5dd728/cloudflare-static/email-decode.min.js' },
  { name: 'jquery', src: '../../../assets/js/jquery-min.js' },
  { name: 'bootstrap', src: '../../../assets/js/bootstrap.min.js' },
  { name: 'modernizr', src: '../../../assets/js/modernizr.js' },
  { name: 'appear', src: '../../../assets/js/appear.min.js' },
  { name: 'mega_menu', src: '../../../assets/js/mega_menu.min.js' },
  { name: 'timeline', src: '../../../assets/js/timeline.js' },
  { name: 'wow', src: '../../../assets/js/wow.min.js' },
  { name: 'jquery_scroll', src: '../../../assets/js/jquery.scrollme.min.js' },
  { name: 'countdown', src: '../../../assets/js/countdown.js' },
  { name: 'waypoints', src: '../../../assets/js/waypoints.min.js' },
  { name: 'jquery_counterup', src: '../../../assets/js/jquery.counterup.min.js' },
  { name: 'owl', src: '../../../assets/js/owl.carousel.min.js' },
  { name: 'magnific', src: '../../../assets/js/jquery.magnific-popup.min.js' },
  { name: 'isotope', src: '../../../assets/js/isotope.pkgd.min.js' },
  { name: 'circle', src: '../../../assets/js/circle-progress.min.js' },
  { name: 'canvasjs', src: '../../../assets/js/canvasjs.min.js' },
  { name: 'themepunch_tools', src: '../../../assets/revslider/js/jquery.themepunch.tools.min.js' },
  { name: 'themepunch_rev', src: '../../../assets/revslider/js/jquery.themepunch.revolution.min.js' },
  { name: 'actions', src: '../../../assets/revslider/js/extensions/revolution.extension.actions.min.js' },
  { name: 'carousel', src: '../../../assets/revslider/js/extensions/revolution.extension.carousel.min.js' },
  { name: 'kenburn', src: '../../../assets/revslider/js/extensions/revolution.extension.kenburn.min.js' },
  { name: 'layeranimation', src: '../../../assets/revslider/js/extensions/revolution.extension.layeranimation.min.js' },
  { name: 'migration', src: '../../../assets/revslider/js/extensions/revolution.extension.migration.min.js' },
  { name: 'navigation', src: '../../../assets/revslider/js/extensions/revolution.extension.navigation.min.js' },
  { name: 'parallax', src: '../../../assets/revslider/js/extensions/revolution.extension.parallax.min.js' },
  { name: 'slideanims', src: '../../../assets/revslider/js/extensions/revolution.extension.slideanims.min.js' },
  { name: 'video', src: '../../../assets/revslider/js/extensions/revolution.extension.video.min.js' },
  { name: 'retina', src: '../../../assets/js/retina.min.js' },
  { name: 'cust', src: '../../../assets/js/custom.js' },
  { name: 'custom', src: '../../../assets/revslider/js/extensions/custom.js' }


];




declare var document: any;

@Injectable()
export class DynamicScriptLoaderService {

  private scripts: any = {};

  public scrip: string[] = [];

  constructor() {
    let i = 0;
    ScriptStore.forEach(elt => {
      this.scrip[i] = elt.name;
      i++;
    });

    ScriptStore.forEach((script: any) => {
      this.scripts[script.name] = {
        loaded: false,
        src: script.src
      };
    });
  }

  load(...scripts: string[]) {
    const promises: any[] = [];
    scripts.forEach((script) => promises.push(this.loadScript(script)));
    return Promise.all(promises);
  }

  loadScript(name: string) {
    return new Promise((resolve, reject) => {
      if (!this.scripts[name].loaded) {
        // load script
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = this.scripts[name].src;
        if (script.readyState) {  // IE
          script.onreadystatechange = () => {
            if (script.readyState === 'loaded' || script.readyState === 'complete') {
              script.onreadystatechange = null;
              this.scripts[name].loaded = true;
              resolve({script: name, loaded: true, status: 'Loaded'});
            }
          };
        } else {  // Others
          script.onload = () => {
            this.scripts[name].loaded = true;
            resolve({script: name, loaded: true, status: 'Loaded'});
          };
        }
        script.onerror = (error: any) => resolve({script: name, loaded: false, status: 'Loaded'});
        document.getElementsByTagName('head')[0].appendChild(script);
      } else {
        resolve({ script: name, loaded: true, status: 'Already Loaded' });
      }
    });
  }

}
