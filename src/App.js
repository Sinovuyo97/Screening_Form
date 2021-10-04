import React from 'react';
import './style.css';
import Iziphumo from './components/display';
function App() {
  const [mainArray, setMain] = React.useState([]);
  const [searchArr, setSearchArr] = React.useState('');
  const [newArray, setNew] = React.useState([{}]);
  const handleSubmit = para => {
    setMain([...mainArray, para]);
    setNew(newArray);
  };
  const handleDelete = index => {
    let newArray = mainArray;
    setMain(newArray.filter(Array1 => Array1.id !== index));
  };

  const Search = (search) =>{
    mainArray.filter(value => {
      if (search==""){
        return value;
      }else if(value.id.includes(search)){
      return value;
    }})
  }
  return (
    <>
      <div className="row justify-space-between" id="row">
        <div className="formSide col-lg-6 col-md-6 col-sm-12">
          <form onSubmit={e => e.preventDefault()}>
            <h1>Screening Form</h1>
            <div className="row m-1">
              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="inputs my-2 mx-2">
                  <input
                    type="text"
                    name="Fname"
                    placeholder="First Name"
                    value={newArray.Fname}
                    onChange={e =>
                      setNew({ ...newArray, Fname: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="inputs my-1 mx-2">
                  <input
                    type="text"
                    name="Lname"
                    placeholder="Last Name"
                    value={newArray.Lname}
                    onChange={e =>
                      setNew({ ...newArray, Lname: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row m-1">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="inputs my-1 mx-2">
                  <input
                    type="text"
                    name="id"
                    placeholder="ID"
                    value={newArray.id}
                    onChange={e => setNew({ ...newArray, id: e.target.value })}
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="inputs my-1 mx-2">
                  <input
                    type="text"
                    name="Temperature"
                    placeholder="Temperature"
                    value={newArray.Temperature}
                    onChange={e =>
                      setNew({ ...newArray, Temperature: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>

            <div className="row m-1">
              <div className="col-lg-6 col-md-6 col-sm-12 p-1">
                <div className="inputs my-1 mx-3">
                  <input
                    type="text"
                    name="number"
                    placeholder="Cell Number"
                    value={newArray.number}
                    onChange={e =>
                      setNew({ ...newArray, number: e.target.value })
                    }
                  />
                </div>
              </div>
              <div className="col-lg-6 col-md-4 col-sm-12 p-1">
                <div className="inputs my-1 mx-3">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={newArray.email}
                    onChange={e =>
                      setNew({ ...newArray, email: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <div className="optionbox">
              <div className="options my-3 mx-5">
                <div>
                  <label>
                    Have you recently traveled to an area with known local
                    spread of COVID-19?
                  </label>
                </div>
                <select
                  name="rtravelled"
                  value={newArray.rtravelled}
                  onChange={e =>
                    setNew({ ...newArray, rtravelled: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="options my-3 mx-5">
                <div>
                  <label>
                    Have you come into close contact a person who has a
                    laboratory confirmed COVID-19 diagnosis?
                  </label>
                </div>
                <select
                  name="closeContact"
                  value={newArray.closeContact}
                  onChange={e =>
                    setNew({ ...newArray, closeContact: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="options my-3 mx-5">
                <div>
                  <label>
                    Do you have a fever or symptoms of lower respiratory
                    illnesses such as cough, shortness of breath or difficulty
                    breathing?
                  </label>
                </div>
                <select
                  name="fever"
                  value={newArray.fever}
                  onChange={e => setNew({ ...newArray, fever: e.target.value })}
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="options my-3 mx-5">
                <div>
                  <label>Do you feel a sore throat?</label>
                </div>
                <select
                  name="throat"
                  value={newArray.throat}
                  onChange={e =>
                    setNew({ ...newArray, throat: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="options my-3 mx-5">
                <div>
                  <label>Do you feel fatigue?</label>
                </div>
                <select
                  name="fatigue"
                  value={newArray.fatigue}
                  onChange={e =>
                    setNew({ ...newArray, fatigue: e.target.value })
                  }
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="options my-3 mx-5">
                <div>
                  <label>Do you feel cough and sputum production?</label>
                </div>
                <select
                  name="cough"
                  value={newArray.cough}
                  onChange={e => setNew({ ...newArray, cough: e.target.value })}
                >
                  <option value="" disabled selected hidden>
                    ---select---
                  </option>
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
            </div>
            <button
              className="button my-5 mx-5"
              onClick={() => handleSubmit(newArray)}
            >
              submit
            </button>
          </form>
        </div>

        <div className="iziphumo col-lg-6 col-md-6 sm-12">
          <input
            type="text"
            placeholder="Search by id"
            name="search"
            value={searchArr}
            onChange={e => setSearchArr(e.target.value)}
          />

          <button onClick={() => Search(searchArr)}>search</button>
          <Iziphumo
            passed={mainArray}
            delete={handleDelete}
            search={searchArr}
          />
        </div>
      </div>
    </>
  );
}
export default App;
