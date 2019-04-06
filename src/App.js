import React, { Component } from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import SurveyEditor from "./SurveyEditor";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import "jquery-ui/themes/base/all.css";
import "nouislider/distribute/nouislider.css";
import "select2/dist/css/select2.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

import "jquery-bar-rating/dist/themes/css-stars.css";

import $ from "jquery";
import "jquery-ui/ui/widgets/datepicker.js";
import "select2/dist/js/select2.js";
import "jquery-bar-rating";

import * as widgets from "surveyjs-widgets";

widgets.icheck(Survey, $);
widgets.select2(Survey, $);
widgets.inputmask(Survey);
widgets.jquerybarrating(Survey, $);
widgets.jqueryuidatepicker(Survey, $);
widgets.nouislider(Survey);
widgets.select2tagbox(Survey, $);
widgets.signaturepad(Survey);
widgets.sortablejs(Survey);
widgets.ckeditor(Survey);
widgets.autocomplete(Survey, $);
widgets.bootstrapslider(Survey);

class App extends Component {
  json = {
 pages: [
  {
   name: "page1",
   elements: [
    {
     type: "radiogroup",
     name: "question2",
     title: "Can you remit RMB from within Mainland China to outside Mainland China?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    }
   ]
  },
  {
   name: "page2",
   elements: [
    {
     type: "dropdown",
     name: "question1",
     title: "On average, how many percentage points are your rates below the BOC mid rate? ",
     choices: [
      {
       value: "item1",
       text: "0.0%"
      },
      {
       value: "item2",
       text: "0.1%"
      },
      {
       value: "item3",
       text: "0.2%"
      },
      {
       value: "item4",
       text: "0.3%"
      },
      {
       value: "item5",
       text: "0.4%"
      },
      {
       value: "item6",
       text: "0.5%"
      },
      {
       value: "item7",
       text: "0.6%"
      },
      {
       value: "item8",
       text: "0.7%"
      },
      {
       value: "item9",
       text: "0.8%"
      },
      {
       value: "item10",
       text: "0.9%"
      },
      {
       value: "item11",
       text: "1.0%"
      },
      {
       value: "item12",
       text: "1.1%"
      },
      {
       value: "item13",
       text: "1.2%"
      },
      {
       value: "item14",
       text: "1.3%"
      },
      {
       value: "item15",
       text: "1.4%"
      },
      {
       value: "item16",
       text: "1.5%"
      },
      {
       value: "item17",
       text: "1.6%"
      },
      {
       value: "item18",
       text: "1.7%"
      },
      {
       value: "item19",
       text: "1.8%"
      },
      {
       value: "item20",
       text: "1.9%"
      },
      {
       value: "item21",
       text: "2.0%"
      },
      {
       value: "item22",
       text: "2.1%"
      },
      {
       value: "item23",
       text: "2.2%"
      },
      {
       value: "item24",
       text: "2.3%"
      },
      {
       value: "item25",
       text: "2.4%"
      },
      {
       value: "item26",
       text: "2.5%"
      },
      {
       value: "item27",
       text: "2.6%"
      },
      {
       value: "item28",
       text: "2.7%"
      },
      {
       value: "item29",
       text: "2.8%"
      },
      {
       value: "item30",
       text: "2.9%"
      },
      {
       value: "item31",
       text: "3.0%"
      },
      {
       value: "item32",
       text: "More than 3.0%"
      }
     ]
    }
   ]
  },
  {
   name: "page3",
   elements: [
    {
     type: "dropdown",
     name: "question3",
     title: "What is the maximum amount that can be sent per single transaction from Mainland China to outside Mainland China in USD?",
     choices: [
      {
       value: "item1",
       text: "Less than 50,000 USD"
      },
      {
       value: "item2",
       text: "50,000-100,000 USD"
      },
      {
       value: "item3",
       text: "100,000-300,000 USD"
      },
      {
       value: "item4",
       text: "300,000-500,000 USD or more"
      },
      {
       value: "item5",
       text: "No maximum"
      }
     ]
    },
    {
     type: "dropdown",
     name: "question4",
     title: "What is the minimum amount that can be sent per single transaction from Mainland China to outside Mainland China in USD?",
     choices: [
      {
       value: "item1",
       text: "No minimum"
      },
      {
       value: "item2",
       text: "1-500 USD minimum"
      },
      {
       value: "item3",
       text: "500-5,000 USD minimum"
      },
      {
       value: "item4",
       text: "5,000-20,000 USD minimum"
      },
      {
       value: "item5",
       text: "Over 20,000 USD minimum "
      }
     ]
    }
   ]
  },
  {
   name: "page4",
   elements: [
    {
     type: "dropdown",
     name: "question5",
     title: "What is the minimum total daily volume that can be remitted from Mainland China to outside Mainland China?",
     choices: [
      {
       value: "item1",
       text: "No minimum"
      },
      {
       value: "item2",
       text: "1-20,000 USD minimum"
      },
      {
       value: "item3",
       text: "20,000-100,000 USD minimum"
      },
      {
       value: "item4",
       text: "100,000-1,000,000 USD minimum"
      },
      {
       value: "item5",
       text: "Over 1,000,000 USD minimum "
      }
     ]
    },
    {
     type: "dropdown",
     name: "question6",
     title: "What is the maximum total daily volume that can be remitted from Mainland China to outside Mainland China?",
     choices: [
      {
       value: "item1",
       text: "No maximum"
      },
      {
       value: "item2",
       text: "1-20,000 USD maximum"
      },
      {
       value: "item3",
       text: "20,000-100,000 USD maximum"
      },
      {
       value: "item4",
       text: "100,000-1,000,000 USD maximum"
      },
      {
       value: "item5",
       text: "Over 1,000,000 USD maximum"
      }
     ]
    }
   ]
  },
  {
   name: "page5",
   elements: [
    {
     type: "radiogroup",
     name: "question7",
     title: "Are the bank accounts where the funds are remitted in Mainland China static, or do they change?",
     choices: [
      {
       value: "item1",
       text: "Static"
      },
      {
       value: "item2",
       text: "Change"
      },
      {
       value: "item3",
       text: "I don't know"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question8",
     visibleIf: "{question7} = \"item2\"",
     title: "How often do they change?",
     choices: [
      {
       value: "item1",
       text: "Less than once a month"
      },
      {
       value: "item2",
       text: "Less than once a week"
      },
      {
       value: "item3",
       text: "Less than once a day"
      },
      {
       value: {},
       text: "Less than twice a day"
      },
      {
       value: "item4",
       text: "I don't know"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question9",
     title: "What are the total limits on each account?",
     choices: [
      {
       value: "item1",
       text: "No maximum"
      },
      {
       value: "item2",
       text: "1-20,000 USD maximum"
      },
      {
       value: "item3",
       text: "20,000-100,000 USD maximum"
      },
      {
       value: "item4",
       text: "100,000-1,000,000 USD maximum"
      },
      {
       value: "item5",
       text: "Over 1,000,000 USD maximum"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question10",
     title: "Are the accounts used by anyone else?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question12",
     visibleIf: "{question10} = \"item1\"",
     title: "If so how many other people use the accounts?",
     choices: [
      {
       value: "item1",
       text: "1 or less"
      },
      {
       value: "item2",
       text: "1-3"
      },
      {
       value: "item3",
       text: "3-5"
      },
      {
       value: "item4",
       text: "5 or more"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question11",
     title: "Do you directly control the accounts, or someone else?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question13",
     title: "Can we have dedicated accounts exclusive to us?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question14",
     title: "Can we have electronic (read) access to the accounts?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "radiogroup",
     name: "question15",
     title: "Are the accounts corporate or individual accounts?",
     choices: [
      {
       value: "item1",
       text: "Yes"
      },
      {
       value: "item2",
       text: "No"
      }
     ]
    },
    {
     type: "checkbox",
     name: "question16",
     title: "Types of funds permitted (gaming, forex, etc)",
     choices: [
      {
       value: "item1",
       text: "Gaming"
      },
      {
       value: "item2",
       text: "Forex"
      }
     ]
    },
    {
     type: "checkbox",
     name: "question17",
     title: "What type of account will we receive funds from?",
     choices: [
      {
       value: "item1",
       text: "Corporate account"
      },
      {
       value: "item2",
       text: "Personal account"
      },
      {
       value: "item3",
       text: "Payment Service Provider"
      }
     ]
    },
    {
     type: "checkbox",
     name: "question18",
     title: "How are funds off-shored? (swap, wire, etc)",
     choices: [
      {
       value: "item1",
       text: "Swap"
      },
      {
       value: "item2",
       text: "Crossborder wire transfer"
      },
      {
       value: "item3",
       text: "Other"
      }
     ]
    }
   ]
  },
  {
   name: "page6"
  }
 ]
}

  componentWillMount() {
    import("icheck");
    window["$"] = window["jQuery"] = $;
  }

  onValueChanged(result) {
    console.log("value changed!");
  }

  onComplete(result) {
    console.log("Complete! " + result);
  }

  render() {
    Survey.Survey.cssType = "bootstrap";
    var model = new Survey.Model(this.json);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/*<h2>Welcome to React with SurveyJS</h2>*/}
        </div>
        <div className="surveyjs">
          {/*If you want to show survey, uncomment the line below*/}
          {/*<h1>SurveyJS library in action:</h1>*/}
          <Survey.Survey
            model={model}
            onComplete={this.onComplete}
            onValueChanged={this.onValueChanged}
          />
          {/*If you want to show survey editor, uncomment the line below*/}
          {/*<h1>SurveyJS Editor in action:</h1>*/}
          {/*<SurveyEditor />*/}
        </div>
        <p className="App-intro">
          {/*To get started, edit <code>src/App.js</code> and save to reload.*/}
        </p>
      </div>
    );
  }
}

export default App;
