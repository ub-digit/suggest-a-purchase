export default {
  heading: 'Föreslå ett inköp',
  lead: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus porta sem, non sodales ex imperdiet vitae. Phasellus fermentum ligula vitae neque viverra blandit.',
  body: 'Quisque quam justo, finibus eget gravida sed, faucibus eu justo. Mauris sem lectus, pretium vitae ultricies et, imperdiet vel eros. Donec luctus interdum auctor. Vestibulum mollis tempor commodo. Duis eleifend dictum nibh, sed lobortis nunc scelerisque vel.',
  link_text: 'Mer information om hur biblioteket gör inköp',
  link_url: 'www',
  language_link: 'In English',

  libraries: {
    g: 'Humanistiska biblioteket',
    gcl: 'Studietorget Campus Linné',
    ge: 'Ekonomiska biblioteket',
    ghdk: 'Konstbiblioteket',
    gk: 'Samhällsvetenskapliga biblioteket',
    gm: 'Biomedicinska biblioteket',
    gp: 'Pedagogiska biblioteket',
    gumu: 'Biblioteket för musik och dramatik',
    gv: 'Studietorget Hälsovetarbacken'
  },

  form: {
    heading: 'Vad vill du att vi köper in?',
    order_types: {
      book: 'En bok',
      journal: 'En tidskrift',
      database: 'En databas',
      other: 'Annat/vet inte'
    },
    book_form: {
      heading: 'Beskriv boken',
      title_label: 'Titel',
      title_placeholder: 'Titel',
      author_label: 'Författare',
      author_placeholder: 'Författare',
      isbn_label: 'ISBN',
      isbn_placeholder: 'ISBN',
      year_label: 'År',
      year_placeholder: 'År',
      other_label: 'Övriga uppgifter',
      book_type_label: 'Vill du ha en e-bok eller en tryckt bok?',      
      book_type_options: {
        print: 'Tryckt',
        e: 'E-bok',
        any: 'Spelar ingen roll'
      },
      e_book_help_text: 'Om vad som är skillnaden mellan en e-bok och en vanlig bok.',
      reservation_heading: 'Reservation och avhämtning',
      reserve_label: 'Jag vill reservera boken',
      library_card_label: 'Nummer på GU-kort/bibliotekskort',
      library_card_placeholder: 'GU-kort/bibliotekskort',
      pickup_label: 'Jag vill hämta på',
      pickup_prompt: 'Välj ett bibliotek',
      valid_date_label: 'Boken är inte aktuell för mig efter',
      valid_date_placeholder: 'Datum'
    }
  }
};
