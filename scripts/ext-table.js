(function () {
  class DataTable extends HTMLElement {
    constructor() {
      super();
    }
    async connectedCallback() {
      const src = this.getAttribute('src');
        if (src) {
          await this.loadTable(src);
      }
    }

    downgradeHeadings(html, levels = 2) {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Обрабатываем h1-h6
        for (let i = 1; i <= 6; i++) {
            const headings = doc.querySelectorAll(`h${i}`);
            headings.forEach(heading => {
                const newLevel = Math.min(6, i + levels); // не больше h6
                this.replaceHeading(heading, `h${newLevel}`);
            });
        }

        return doc.body.innerHTML;
    }

    replaceHeading(oldHeading, newTagName) {
        const newHeading = document.createElement(newTagName);
        newHeading.innerHTML = oldHeading.innerHTML;

        // Копируем атрибуты
        Array.from(oldHeading.attributes).forEach(attr => {
            newHeading.setAttribute(attr.name, attr.value);
        });

        oldHeading.parentNode.replaceChild(newHeading, oldHeading);
    }

    async loadTable(url) {
      const response = await fetch(url);
      const shtml = await response.text();

      const rhtml = this.hasAttribute('collapse') ? (
        shtml.replaceAll("<hr>", "").replaceAll(
          /<A NAME="(.+?)"><h1>(.+?)<\/h1><\/A>/g,
          "<details><summary>$2</summary><a name=\"$1\"></a>"
        ).replaceAll("</table>", "</table></details><hr />")
      ) : shtml;

      const ihtml = this.downgradeHeadings(rhtml, 3); // понижаем на 3 уровня

      this.innerHTML = `
        <div class="ext-table-wrapper">
          ${ihtml}
        </div>
      `;
    }
  }

  customElements.define('ext-table', DataTable);

})();
