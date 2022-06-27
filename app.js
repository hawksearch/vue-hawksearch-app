import HawksearchVue from '@hawksearch/vue';
import {ResultItem, ResultListing} from '@hawksearch/vue';

ResultItem.templateOverride = "#vue-hawksearch-result-item";
ResultListing.templateOverride = "#vue-hawksearch-result-listing";

import '@hawksearch/vue/dist/vue-hawksearch.css';
import './app.scss';

setTimeout(() => {
    var components = document.querySelectorAll('[data-vue-hawksearch-component]');

    if (components) {
        components.forEach(component => {
            try {
                var configId = component.getAttribute('data-vue-hawksearch-config');
                var config = JSON.parse(document.getElementById(configId).innerHTML);
                var widget = HawksearchVue.createWidget(component, {config, dataLayer: configId});
            } catch (e) {
                console.error(e);
            }
        });
    }
}, 10);
