import { MarkdownView, Plugin, ViewStateResult } from 'obsidian';
import { around } from 'monkey-around';


export default class HistoryPlugin extends Plugin {
	async onload() {
		this.register(around(MarkdownView.prototype, {
			setState(old) {
				return function (this: MarkdownView, state: any, result: ViewStateResult) {
					result.history = true;
					return old.call(this, state, result);
				}
			} 
		}));
	}
}
