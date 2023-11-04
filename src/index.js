import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function MyComponent(props) {
  return (
    <div className="bg-neutral-100 flex flex-col">
      <div style={{position: 'sticky', top: 0, backgroundColor: '#235390', padding: '10px'}} className="self-stretch flex w-full flex-col px-5 py-3 max-md:max-w-full">
        <div className="self-center flex w-full max-w-[1315px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
          <div className="self-center flex items-start gap-4 my-auto">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/logo.svg'}
            
              className="aspect-[1.03] object-cover object-center w-[65px] overflow-hidden max-w-full shrink-0"
            />

            <div className="text-neutral-100 text-5xl leading-[133.333%] mt-1">
              bemblin
            </div>
          </div>
          <div className="self-stretch flex items-start justify-between gap-3.5 max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Home.svg'}
              className="aspect-square object-cover object-center w-[72px] justify-center items-center overflow-hidden max-w-full shrink-0"
             
            />

            <img
                  loading="lazy"
                  src={process.env.PUBLIC_URL + '/Images/People.svg'}
                  className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                />


            <img
                  loading="lazy"
                  src={process.env.PUBLIC_URL + '/Images/Trans.svg'}
                  className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
                />  

          <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Game.svg'}
                className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
              />


<img
      loading="lazy"
      src={process.env.PUBLIC_URL + '/Images/Comm.svg'}
      className="aspect-square object-cover object-center w-[72px] fill-white stroke-[1px] stroke-black stroke-opacity-10 overflow-hidden max-w-full shrink-0"
    />


          </div>

       





          <div className="self-center flex items-start gap-0 my-auto">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Tabler_bulb.svg'}
              className="aspect-[1.05] object-cover object-center w-[46px] overflow-hidden max-w-full shrink-0"
            />

            <div className="start-text justify-center text-stone-900 text-center text-base leading-[318.75%] items-start bg-white w-[183px] max-w-full mt-px pl-2.5 pr-3 rounded-[1.875rem]">
              Get Started
            </div>
          </div>


          <img
            loading="lazy"
            src={process.env.PUBLIC_URL + '/Images/Basil_menu-solid.svg'}
            className="aspect-[1.28] object-cover object-center w-16 overflow-hidden self-center max-w-full shrink-0 my-auto"
          />
        </div>
      </div>



      <div className="self-center flex w-full max-w-[1296px] flex-col mt-20 mb-7 max-md:max-w-full max-md:mt-10">
        <div className="flex w-[623px] max-w-full items-start gap-2.5 px-5 max-md:flex-wrap max-md:justify-center">
          <div className="trans-text bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-2.5 pl-6 pr-6 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Clarity_world-line.svg'}
              className="aspect-square object-cover object-center w-9 overflow-hidden max-w-full shrink-0 mt-1"
            />
            <div className="flex flex-col mt-px">
              <div className="trans-type justify-center text-black text-base">
                Translate Text
              </div>
              <div className="trans-lang justify-center text-zinc-700 text-sm mt-2.5">
                1 language
              </div>
            </div>
          </div>
          <div className="trans-files bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-3.5 pl-6 pr-5 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Teenyicons_documents-solid.svg'}
              className="aspect-[0.94] object-cover object-center w-[31px] overflow-hidden self-center max-w-full shrink-0 my-auto"
            />
            <div className="flex flex-col mt-px">
            <div className="trans-file justify-center text-black text-base" style={{ display: 'flex', width: '7.375rem', height: '1.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#000', fontFamily: 'Poppins', fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                Translate Files
              </div>
              <div className="justify-center text-zinc-700 text-sm mt-3" style={{ display: 'flex', width: '7.375rem', height: '0.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#46484D', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                .pdf, .docx, .pptx
              </div>
            </div>
          </div>
          <div className="ai-write bg-white bg-opacity-90 self-stretch flex w-[201px] max-w-full items-start justify-between gap-5 pl-6 pr-3 py-7 rounded-xl border-[0.5px] border-solid border-neutral-500">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/System-uicons_write.svg'}
              className="aspect-[0.93] object-cover object-center w-7 overflow-hidden self-center max-w-full shrink-0 my-auto"
            />
            <div className="self-stretch flex flex-col">
            <div className="justify-center text-black text-base" style={{ color: '#000', fontFamily: 'Poppins', fontSize: '1rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
 
                AI Write
              </div>
                <div className="justify-center text-zinc-700 text-sm mt-2.5" style={{ display: 'flex', width: '8.5rem', height: '0.25rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#46484D', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 400, lineHeight: 'normal' }}>
                AI-powered edits
              </div>
            </div>
          </div>
        </div>



        <div className="header bg-white bg-opacity-90 self-stretch flex flex-col mt-20 px-5 py-5 rounded-3xl border-[0.5px] border-solid border-neutral-500 max-md:max-w-full max-md:mt-10" style={{borderRadius: '1.25rem 1.25rem 0 0'}}>
          <div className="self-center flex w-full max-w-[1178px] items-start justify-between gap-5 -mt-px max-md:max-w-full max-md:flex-wrap max-md:justify-center">
            <div className="self-stretch flex items-start justify-between gap-2">
                <div className="justify-center text-black text-center text-sm font-medium my-auto" style={{display: 'flex', width: '8.1875rem', height: '1.3125rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#000', textAlign: 'center', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal'}}>
                Detect language
              </div>
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Down-arrow.svg'}
                className="aspect-[0.76] object-cover object-center w-[22px] overflow-hidden max-w-full shrink-0"
              />
            </div>
            <div className="self-stretch flex items-start justify-between gap-1.5 max-md:justify-center">
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/next1.svg'}
                className="aspect-[0.92] object-cover object-center w-6 overflow-hidden self-center max-w-full shrink-0 my-auto"
              />
              <div className="justify-center text-black text-center text-sm font-medium my-auto" style={{ display: 'flex', width: '8.1875rem', height: '1.3125rem', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, color: '#000', textAlign: 'center', fontFamily: 'Poppins', fontSize: '0.875rem', fontStyle: 'normal', fontWeight: 500, lineHeight: 'normal' }}>
                English
              </div>
              <img
                loading="lazy"
                src={process.env.PUBLIC_URL + '/Images/Down-arrow.svg'}
                className="aspect-[0.76] object-cover object-center w-[22px] overflow-hidden max-w-full shrink-0"
              />
            </div>
            <div className="self-center flex w-[165px] max-w-full items-start justify-between gap-5 my-auto">
              <div className="justify-center text-black text-center text-sm font-medium">
                Automatic
              </div>
              <div className="justify-center text-black text-center text-sm font-medium mt-px">
                Glossary
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch px-5 max-md:max-w-full">
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
            <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
              <textarea 
                className="bg-white bg-opacity-90 flex w-[648px] h-[445px] flex-col mx-auto rounded-none border-[0.5px] border-solid border-neutral-500 max-md:max-w-full" 
                style={{
                  marginLeft: '-18px', 
                  fontSize: '20px', 
                  fontFamily: 'Poppins', 
                  textAlign: 'center', 
                  paddingTop: '200px', 
                  backgroundImage: `url(${process.env.PUBLIC_URL}/Images/background.png)`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center center'
                }}
                onFocus={(e) => e.target.value = ''}
              >
              Drag and drop to translate PDF, Word (.docx), and PowerPoint (.pptx) files with our document translator.
              Click the microphone to translate speech.
              </textarea>
            </div>
            <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
              <div className="bg-white bg-opacity-90 flex w-[648px] h-[445px] flex-col mx-auto rounded-none border-[0.5px] border-solid border-neutral-500 max-md:max-w-full" style={{marginLeft: '-40px'}}  />
            </div>
          </div>
        </div>
        <div className="items-start self-center flex w-[340px] max-w-full justify-between gap-5 mt-9 px-5 max-md:justify-center">
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/History.svg'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
              style={{
                display: 'flex',
                width: '4.5rem',
                height: '4.5rem',
                padding: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '2.25rem',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                background: '#F6F6F6'
              }}
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%] self-center">
              History
            </div>
          </div>
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Saved.png'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden self-stretch"
              style={{
                borderRadius: '2.25rem',
                border: '1px solid rgba(0, 0, 0, 0.12)',
                background: '#F6F6F6',
                display: 'flex',
                width: '4.5rem',
                height: '4.5rem',
                padding: '1.25rem',
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%] self-center">
              Saved
            </div>
          </div>
          <div className="flex flex-col">
            <img
              loading="lazy"
              src={process.env.PUBLIC_URL + '/Images/Contribute.png'}
              className="aspect-square object-cover object-center w-full justify-center items-center overflow-hidden"
            />
            <div className="text-black text-opacity-50 text-center text-sm font-medium leading-[138.462%]">
              Contribute
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <MyComponent />
  </React.StrictMode>,
  document.getElementById('root')
);