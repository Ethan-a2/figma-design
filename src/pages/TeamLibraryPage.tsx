export default function TeamLibraryPage() {
  return (
    <div id="page-teamlibrary-container" className="bg-white" style={{ position: 'relative', width: '100%', height: '6000px' }}>
      {/* Start here text */}
      <div
        id="text-starthere-display"
        style={{
          position: 'absolute',
          left: '0px',
          top: '0px',
          width: '341px',
          height: '174px',
        }}
      >
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '72px',
            lineHeight: '1.21em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Start here
          <br />↓
        </p>
      </div>

      {/* Frame 01 */}
      <div
        id="frame-01-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '200px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background */}
        <div
          id="frame-01-background-layer"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />
        
        {/* 01 Image */}
        <img
          id="image-01-background"
          src="/01-background.png"
          alt="01"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '342.5px',
            height: '492px',
            objectFit: 'cover',
          }}
        />

        {/* Text Group */}
        <div
          id="group-01-text-container"
          style={{
            position: 'absolute',
            left: '375px',
            top: '145px',
            width: '278px',
            height: '202px',
          }}
        >
          <h1
            id="text-01-title-display"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '276px',
              height: '88px',
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '38px',
              lineHeight: '1.15em',
              letterSpacing: '-1.9%',
              color: '#000000',
            }}
          >
            Build your own team library
          </h1>
          <p
            id="text-01-description-display"
            style={{
              position: 'absolute',
              left: '0px',
              top: '106px',
              width: '278px',
              height: '96px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '14px',
              lineHeight: '1.71em',
              letterSpacing: '-0.6%',
              color: 'rgba(0, 0, 0, 0.8)',
            }}
          >
            Don't reinvent the wheel with every design. Team libraries let you share styles and components across files, with everyone on your team.
          </p>
        </div>
      </div>

      {/* Frame 02 */}
      <div
        id="frame-02-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '720px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-02-background-svg"
          src="/02-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* Published text */}
        <p
          id="text-02-published-display"
          style={{
            position: 'absolute',
            left: '439px',
            top: '101px',
            width: '207px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          We're published already!
          <br />
          Edit us to be your team's colors.
        </p>

        {/* Arrow */}
        <img
          id="image-02-arrow-indicator"
          src="/02-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '543px',
            top: '149px',
            width: '0px',
            height: '42px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-02-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-02-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '338px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Edit team color styles
        </h2>

        {/* Description */}
        <p
          id="text-02-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '96px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Published styles are shared with everyone on the team—they can be used by all team members in any of their files. Changing these styles will update them everywhere they're used.
          <br /><br />
          Change these default colors to your team's colors by selecting a color layer and clicking on       in the Design panel to the right.
        </p>

        {/* 02 Background Image */}
        <img
          id="image-02-colorsamples-background"
          src="/02-background.png"
          alt="02"
          style={{
            position: 'absolute',
            left: '32px',
            top: '192px',
            width: '337px',
            height: '264px',
            objectFit: 'cover',
          }}
        />

        {/* Color Swatches */}
        <div
          id="color-02-fuschia100-swatch"
          style={{
            position: 'absolute',
            left: '32px',
            top: '192px',
            width: '40px',
            height: '40px',
            backgroundColor: '#EF5DA8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-02-fuschia80-swatch"
          style={{
            position: 'absolute',
            left: '80px',
            top: '192px',
            width: '40px',
            height: '40px',
            backgroundColor: '#F178B6',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-02-fuschia60-swatch"
          style={{
            position: 'absolute',
            left: '128px',
            top: '192px',
            width: '40px',
            height: '40px',
            backgroundColor: '#FCDDEC',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-02-iris100-swatch"
          style={{
            position: 'absolute',
            left: '32px',
            top: '240px',
            width: '40px',
            height: '40px',
            backgroundColor: '#5D5FEF',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-02-iris80-swatch"
          style={{
            position: 'absolute',
            left: '80px',
            top: '240px',
            width: '40px',
            height: '40px',
            backgroundColor: '#7879F1',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-02-iris60-swatch"
          style={{
            position: 'absolute',
            left: '128px',
            top: '240px',
            width: '40px',
            height: '40px',
            backgroundColor: '#A5A6F6',
            borderRadius: '3px',
          }}
        />
      </div>

      {/* Frame 03 */}
      <div
        id="frame-03-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '1240px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-03-background-svg"
          src="/03-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-03-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-03-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '179px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Create color styles
        </h2>

        {/* Description */}
        <p
          id="text-03-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          To create new styles, select a layer and fill it with the color you want as a style. Then click on       in the color styles menu.
        </p>

        {/* Tip Background */}
        <img
          id="image-03-tip-background"
          src="/03-tip-bg.svg"
          alt="Tip"
          style={{
            position: 'absolute',
            left: '32px',
            top: '404px',
            width: '337px',
            height: '56px',
            borderRadius: '3px',
          }}
        />

        {/* Tip Text */}
        <p
          id="text-03-tip-display"
          style={{
            position: 'absolute',
            left: '104px',
            top: '420px',
            width: '285px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Tip: You can group styles together using the naming convention Group/Color. For example: Fuschia/100
        </p>

        {/* 03 Background Image */}
        <img
          id="image-03-colorsamples-background"
          src="/03-background.png"
          alt="03"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '337px',
            height: '260px',
            objectFit: 'cover',
          }}
        />

        {/* Instruction text */}
        <p
          id="text-03-instruction-display"
          style={{
            position: 'absolute',
            left: '455px',
            top: '102px',
            width: '175px',
            height: '30px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Color and create some more styles out of us!
        </p>

        {/* Arrow */}
        <img
          id="image-03-arrow-indicator"
          src="/03-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '543px',
            top: '149px',
            width: '0px',
            height: '42px',
          }}
        />

        {/* Color Swatches */}
        <div
          id="color-03-sample1-swatch"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-03-sample2-swatch"
          style={{
            position: 'absolute',
            left: '80px',
            top: '128px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-03-sample3-swatch"
          style={{
            position: 'absolute',
            left: '128px',
            top: '128px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-03-sample4-swatch"
          style={{
            position: 'absolute',
            left: '32px',
            top: '176px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-03-sample5-swatch"
          style={{
            position: 'absolute',
            left: '80px',
            top: '176px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
        <div
          id="color-03-sample6-swatch"
          style={{
            position: 'absolute',
            left: '128px',
            top: '176px',
            width: '40px',
            height: '40px',
            backgroundColor: '#D8D8D8',
            borderRadius: '3px',
          }}
        />
      </div>

      {/* Frame 04 */}
      <div
        id="frame-04-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '1760px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-04-background-svg"
          src="/04-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* Instruction text */}
        <p
          id="text-04-instruction-display"
          style={{
            position: 'absolute',
            left: '462px',
            top: '117px',
            width: '162px',
            height: '16px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Color me with a style
        </p>

        {/* Arrow */}
        <img
          id="image-04-arrow-indicator"
          src="/04-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '543px',
            top: '149px',
            width: '0px',
            height: '42px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-04-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* 04 Background Image */}
        <img
          id="image-04-colorsamples-background"
          src="/04-background.png"
          alt="04"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '337px',
            height: '332px',
            objectFit: 'cover',
          }}
        />

        {/* Title */}
        <h2
          id="text-04-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '152px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Use color styles
        </h2>

        {/* Description */}
        <p
          id="text-04-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Select a layer, then click on       next to the Fill property in the panel to the right.
        </p>

        {/* Button */}
        <div
          id="button-04-sample-action"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '65px',
            height: '38px',
            backgroundColor: '#AFAFAF',
            borderRadius: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            id="text-04-button-label"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '1.33em',
              color: '#FFFFFF',
            }}
          >
            Button
          </span>
        </div>
      </div>

      {/* Frame 05 */}
      <div
        id="frame-05-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '2280px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-05-background-svg"
          src="/05-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-05-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* 05 Background Image */}
        <img
          id="image-05-textsamples-background"
          src="/05-background.png"
          alt="05"
          style={{
            position: 'absolute',
            left: '32px',
            top: '144px',
            width: '337px',
            height: '316px',
            objectFit: 'cover',
          }}
        />

        {/* Title */}
        <h2
          id="text-05-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '141px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Edit text styles
        </h2>

        {/* Description */}
        <p
          id="text-05-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '48px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Just like published color styles, published text styles are shared across your team. Change text styles by selecting a text layer with the style and clicking on       in the panel to the right.
        </p>

        {/* Instruction text */}
        <p
          id="text-05-instruction-display"
          style={{
            position: 'absolute',
            left: '447px',
            top: '101px',
            width: '192px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          We're published already!
          <br />
          Edit us to be your team's text styles
        </p>

        {/* Arrow */}
        <img
          id="image-05-arrow-indicator"
          src="/05-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '543px',
            top: '149px',
            width: '0px',
            height: '30px',
          }}
        />

        {/* Text Samples */}
        <p
          id="text-05-header1-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '144px',
            width: '142px',
            height: '41.67px',
            fontFamily: 'Work Sans',
            fontWeight: 700,
            fontSize: '34px',
            lineHeight: '1.17em',
            letterSpacing: '-2%',
            color: '#0E0E2C',
          }}
        >
          Header 1
        </p>
        <p
          id="text-05-header2-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '193.67px',
            width: '92.61px',
            height: '26.24px',
            fontFamily: 'Work Sans',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.17em',
            letterSpacing: '-2%',
            color: '#0E0E2C',
          }}
        >
          Header 2
        </p>
        <p
          id="text-05-body-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '227.91px',
            width: '32.41px',
            height: '15.43px',
            fontFamily: 'Work Sans',
            fontWeight: 400,
            fontSize: '13px',
            lineHeight: '1.17em',
            letterSpacing: '-2%',
            color: '#0E0E2C',
          }}
        >
          Body
        </p>
      </div>

      {/* Frame 06 */}
      <div
        id="frame-06-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '2800px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-06-background-svg"
          src="/06-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-06-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-06-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '168px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Create text styles
        </h2>

        {/* Description */}
        <p
          id="text-06-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '48px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          To create new text styles, first select a text layer and format it with the type you want as a style. Then, click on      in the text styles menu.
        </p>

        {/* Instruction text */}
        <p
          id="text-06-instruction-display"
          style={{
            position: 'absolute',
            left: '443px',
            top: '101px',
            width: '201px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Edit us to be your team's text styles and create some more styles
        </p>

        {/* Arrow */}
        <img
          id="image-06-arrow-indicator"
          src="/06-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '543px',
            top: '149px',
            width: '0px',
            height: '42px',
          }}
        />

        {/* 06 Background Image */}
        <img
          id="image-06-textsamples-background"
          src="/06-background.png"
          alt="06"
          style={{
            position: 'absolute',
            left: '32px',
            top: '144px',
            width: '337px',
            height: '316px',
            objectFit: 'cover',
          }}
        />

        {/* Text Samples */}
        <p
          id="text-06-bodysmall-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '144px',
            width: '70px',
            height: '16px',
            fontFamily: 'Droid Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.14em',
            color: '#000000',
          }}
        >
          Body small
        </p>
        <p
          id="text-06-buttontext-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '168px',
            width: '71px',
            height: '16px',
            fontFamily: 'Droid Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.14em',
            color: '#000000',
          }}
        >
          Button text
        </p>
        <p
          id="text-06-linktext-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '192px',
            width: '54px',
            height: '16px',
            fontFamily: 'Droid Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.14em',
            color: '#000000',
          }}
        >
          Link text
        </p>
      </div>

      {/* Frame 07 */}
      <div
        id="frame-07-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '3320px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-07-background-svg"
          src="/07-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-07-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-07-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '141px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Use text styles
        </h2>

        {/* Instruction text */}
        <p
          id="text-07-instruction-display"
          style={{
            position: 'absolute',
            left: '458px',
            top: '101px',
            width: '160px',
            height: '16px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Give me a text style
        </p>

        {/* Arrow */}
        <img
          id="image-07-arrow-indicator"
          src="/07-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '538px',
            top: '133px',
            width: '0px',
            height: '30px',
          }}
        />

        {/* Description */}
        <p
          id="text-07-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Select a text layer and click on      next to the Text property to use text styles.
        </p>

        {/* 07 Background Image */}
        <img
          id="image-07-textsamples-background"
          src="/07-background.png"
          alt="07"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '337px',
            height: '332px',
            objectFit: 'cover',
          }}
        />

        {/* Text Sample */}
        <p
          id="text-07-title-sample"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '59px',
            height: '16px',
            fontFamily: 'Droid Sans',
            fontWeight: 400,
            fontSize: '14px',
            lineHeight: '1.14em',
            color: '#000000',
          }}
        >
          I'm a title
        </p>
      </div>

      {/* Frame 08 */}
      <div
        id="frame-08-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '3840px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-08-background-svg"
          src="/08-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-08-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Tip Background */}
        <img
          id="image-08-tip-background"
          src="/08-tip-bg.svg"
          alt="Tip"
          style={{
            position: 'absolute',
            left: '32px',
            top: '404px',
            width: '337px',
            height: '56px',
            borderRadius: '3px',
          }}
        />

        {/* Tip Text */}
        <p
          id="text-08-tip-display"
          style={{
            position: 'absolute',
            left: '100px',
            top: '420px',
            width: '289px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Tip: The keyboard shortcut to create a component is Ctrl Alt K on Windows, or ⌘⌥K on a Mac.
        </p>

        {/* Title */}
        <h2
          id="text-08-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '188px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Create components
        </h2>

        {/* Description */}
        <p
          id="text-08-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '80px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Create components out of commonly used objects such as buttons and icons to reuse them across your designs.
          <br /><br />
          Select an element and click Create Component in the top bar or the right-click menu.
        </p>

        {/* 08 Background Image */}
        <img
          id="image-08-components-background"
          src="/08-background.png"
          alt="08"
          style={{
            position: 'absolute',
            left: '32px',
            top: '176px',
            width: '337px',
            height: '204px',
            objectFit: 'cover',
          }}
        />

        {/* Instruction text */}
        <p
          id="text-08-instruction-display"
          style={{
            position: 'absolute',
            left: '440px',
            top: '109px',
            width: '210px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Make us into components to show hover states across your designs
        </p>

        {/* Arrow */}
        <img
          id="image-08-arrow-indicator"
          src="/08-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '545px',
            top: '157px',
            width: '0px',
            height: '30px',
          }}
        />

        {/* Cursor Pointer */}
        <div
          id="component-08-cursorpointer-display"
          style={{
            position: 'absolute',
            left: '440px',
            top: '176px',
            width: '32px',
            height: '32px',
          }}
        >
          {/* Hand cursor would be rendered here with SVG images */}
        </div>

        {/* Cursor Default */}
        <img
          id="image-08-cursordefault-display"
          src="/cursor-default.svg"
          alt="Cursor Default"
          style={{
            position: 'absolute',
            left: '480px',
            top: '176px',
            width: '32px',
            height: '32px',
          }}
        />
      </div>

      {/* Frame 09 */}
      <div
        id="frame-09-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '4360px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background SVG */}
        <img
          id="image-09-background-svg"
          src="/09-bg-svg.svg"
          alt="Background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
          }}
        />

        {/* Instruction text */}
        <p
          id="text-09-instruction-display"
          style={{
            position: 'absolute',
            left: '419px',
            top: '124px',
            width: '252px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            textAlign: 'center',
            color: '#007BE5',
            opacity: 0.8,
          }}
        >
          Drag the correct cursor component over these buttons to show default and hover states
        </p>

        {/* Arrow */}
        <img
          id="image-09-arrow-indicator"
          src="/09-arrow.svg"
          alt="Arrow"
          style={{
            position: 'absolute',
            left: '545px',
            top: '172px',
            width: '0px',
            height: '30px',
          }}
        />

        {/* White Background */}
        <div
          id="frame-09-content-background"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '401px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-09-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '161px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Use components
        </h2>

        {/* Description */}
        <p
          id="text-09-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '337px',
            height: '64px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          Drag and drop components onto your canvas from the Assets panel. If you're on an Education, Professional, or Organization  team, you can publish them for team members to use across their own files.
        </p>

        {/* 09 Background Image */}
        <img
          id="image-09-buttons-background"
          src="/09-background-6fc1ae.png"
          alt="09"
          style={{
            position: 'absolute',
            left: '32px',
            top: '160px',
            width: '337px',
            height: '300px',
            objectFit: 'cover',
          }}
        />

        {/* Buttons */}
        <div
          id="button-09-default-action"
          style={{
            position: 'absolute',
            left: '458px',
            top: '220px',
            width: '68px',
            height: '38px',
            backgroundColor: '#56CCF2',
            borderRadius: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            id="text-09-default-label"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '1.33em',
              color: '#FFFFFF',
            }}
          >
            Default
          </span>
        </div>

        <div
          id="button-09-hover-action"
          style={{
            position: 'absolute',
            left: '570px',
            top: '220px',
            width: '61px',
            height: '38px',
            backgroundColor: '#359DD9',
            borderRadius: '1000px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            id="text-09-hover-label"
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '12px',
              lineHeight: '1.33em',
              color: '#FFFFFF',
            }}
          >
            Hover
          </span>
        </div>
      </div>

      {/* Frame 10 */}
      <div
        id="frame-10-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '4880px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background */}
        <div
          id="frame-10-background-layer"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-10-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '246px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Publish your Team Library
        </h2>

        {/* Group 3 */}
        <div
          id="group-10-instructions-container"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '620px',
            height: '324px',
          }}
        >
          {/* 10 Background Image 1 */}
          <img
            id="image-10-publish1-background"
            src="/10-background-1-581ae4.png"
            alt="10"
            style={{
              position: 'absolute',
              left: '0px',
              top: '72px',
              width: '298px',
              height: '252px',
              objectFit: 'fill',
            }}
          />

          {/* Description 2 */}
          <p
            id="text-10-description2-display"
            style={{
              position: 'absolute',
              left: '322px',
              top: '0px',
              width: '298px',
              height: '48px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '1.45em',
              letterSpacing: '0.5%',
              color: '#000000',
              opacity: 0.8,
            }}
          >
            Then, click on Publish next to the current file. You'll have a chance to review your components, styles, and to add a description for your updates.
          </p>

          {/* Description 1 */}
          <p
            id="text-10-description1-display"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '298px',
              height: '48px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '1.45em',
              letterSpacing: '0.5%',
              color: '#000000',
              opacity: 0.8,
            }}
          >
            To share the new styles and components you created in this file with team members, you need to publish this file. Click on         in the Assets panel to the top left.
          </p>

          {/* 10 Background Image 2 */}
          <img
            id="image-10-publish2-background"
            src="/10-background-2.png"
            alt="10"
            style={{
              position: 'absolute',
              left: '322px',
              top: '72px',
              width: '298px',
              height: '252px',
              objectFit: 'cover',
            }}
          />
        </div>

        {/* Banner */}
        <div
          id="group-10-banner-container"
          style={{
            position: 'absolute',
            left: '32px',
            top: '420px',
            width: '621px',
            height: '40px',
          }}
        >
          {/* Tip Background */}
          <img
            id="image-10-tip-background"
            src="/10-tip-bg.svg"
            alt="Tip"
            style={{
              position: 'absolute',
              left: '0px',
              top: '0px',
              width: '621px',
              height: '40px',
              opacity: 0.2,
              borderRadius: '3px',
            }}
          />

          {/* Tip Text */}
          <p
            id="text-10-tip-display"
            style={{
              position: 'absolute',
              left: '34px',
              top: '12px',
              width: '482px',
              height: '16px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '11px',
              lineHeight: '1.45em',
              letterSpacing: '0.5%',
              color: 'rgba(0, 0, 0, 0.8)',
            }}
          >
            Only Education, Professional, or Organization teams can publish components.
          </p>
        </div>
      </div>

      {/* Frame 11 */}
      <div
        id="frame-11-container"
        style={{
          position: 'absolute',
          left: '0px',
          top: '5400px',
          width: '685px',
          height: '492px',
        }}
      >
        {/* Background */}
        <div
          id="frame-11-background-layer"
          style={{
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '685px',
            height: '492px',
            backgroundColor: '#FAFAFA',
          }}
        />

        {/* Title */}
        <h2
          id="text-11-title-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '32px',
            width: '230px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '20px',
            lineHeight: '1.6em',
            letterSpacing: '-1.7%',
            color: '#000000',
          }}
        >
          Using your Team Library
        </h2>

        {/* 11 Background Image */}
        <img
          id="image-11-library-background"
          src="/11-background.png"
          alt="11"
          style={{
            position: 'absolute',
            left: '32px',
            top: '128px',
            width: '621px',
            height: '332px',
            objectFit: 'cover',
          }}
        />

        {/* Description */}
        <p
          id="text-11-description-display"
          style={{
            position: 'absolute',
            left: '32px',
            top: '72px',
            width: '621px',
            height: '32px',
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '1.45em',
            letterSpacing: '0.5%',
            color: 'rgba(0, 0, 0, 0.8)',
          }}
        >
          To use styles and components from Team Libraries, click on         in the Assets panel in any of your files. Toggle on the ones you want to use in your design.
        </p>
      </div>
    </div>
  );
}
