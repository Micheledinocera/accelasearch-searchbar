export default class Labels {
    static LANGUAGE_ITALIAN="it";
    static LANGUAGE_ENGLISH="en";

    static IT_LABELS={
        categories:"Categorie",
        most_searched:"Più Cercati",
        maybe_looking:"Forse cercavi",
        filters:"Filtri",
        active_filters:"Filtri Attivi",
        remove_active_filters:"Rimuovi i filtri attivi",
        no_results:"Siamo spiacenti ma non è stato trovato nessun risultato coerente.",
        short_desc:"Descrizione breve",
        desc:"Descrizione"
    };
    static EN_LABELS={
        categories:"Categories",
        most_searched:"Most Searched",
        maybe_looking:"Maybe you are looking for",
        filters:"Filters",
        active_filters:"Active Filters",
        remove_active_filters:"Remove Active Filters",
        no_results:"We are sorry but no coherent results are found",
        short_desc:"Short Description",
        desc:"Description"
    };

    static getLabels(language){
        switch (language){
            case this.LANGUAGE_ENGLISH:
                return this.EN_LABELS;
            case this.LANGUAGE_ITALIAN:
                return this.IT_LABELS;
            default:
                return this.EN_LABELS
        }
    }
}