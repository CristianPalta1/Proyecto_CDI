import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getScripts } from 'services/scripts';


class MyDocument extends Document {

  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    let data = await getScripts();

    return { ...initialProps, gtmScript: data }
  }

  

  render(){

    const script = this.props.gtmScript;

    return (
      <Html lang="es">
        <Head>
          <script
            rel="preconnect"
            async
            dangerouslySetInnerHTML={{
              __html: `${script?.script_head}`,
            }}
          ></script>  

          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x"
            crossOrigin="anonymous"
            media="screen"
          />
          
          
          <script  rel = "preload" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" type="text/javascript" as="script"></script>
          <script rel = "preload" src="https://code.jquery.com/ui/1.12.0/jquery-ui.js" type="text/javascript" as="script" id='jquery-ui'></script>
          <script  rel = "preload" crossOrigin="anonymous" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.js" id='jquery-modal' as="script"/>
          
          <script
             rel="preload"
            async
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB1VZGvTkSzOGPhRnrAH0wl_ZPdQ3QDUlU"
          ></script>
          
          <script 
            rel="preload"
            async
            id="hs-script-loader"
            src="https://js.hs-scripts.com/5943261.js"
          ></script>


          
         
         
          
        </Head>
        <body>
          
          {/* <link crossOrigin="anonymous" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-modal/0.9.1/jquery.modal.min.css" /> */}
          <link  crossOrigin="anonymous" rel="preload" href="https://code.jquery.com/ui/1.12.0/themes/base/jquery-ui.css" />
          <link  crossOrigin="anonymous" rel="preload" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
          <noscript
            async
            dangerouslySetInnerHTML={{
              __html: `${script?.script_body}`,
            }}
          ></noscript>

          <Main />
          <NextScript />

          <div id="portal"></div>

          
          {/* <script id="hs-script-loader" async defer src="https://js.hs-scripts.com/5943261.js" /> */}
          {/* <script async crossOrigin="anonymous" src="https://code.jquery.com/ui/1.12.0/jquery-ui.js" id='jquery-ui' /> */}
        
        </body>
      </Html>
    );
  }
}

export default MyDocument
