import React from 'react';

const Display = props => {
const handleDelete = index =>{
  props.delete(index)
}
  const Results = props.passed.map((res, i) => {
    let subs = res.id.substr(6, 1);
    let citizen = res.id.substr(10, 1);
    if (i > 0 && subs > 4 && citizen == 0) {
      let citizen = 'South African citizen';
      let idstr = 'Mr';
      return (
        <div>
          <h1 className="text-center">
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Thank you {idstr} {res.Fname.toUpperCase().substr(0, 1)}. {res.Lname.toUpperCase()}
            </marquee>
          </h1>

          <table className="form-table m-3">
            <tr>
              <th>
                <p>ID Number:</p>
              </th>
              <th>
                <p className="pl-3">{res.id}</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>Temperature:</p>
              </th>
              <th>
                <p className="pl-3">{res.temp}°</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Cell Number: </p>
              </th>
              <th>
                <p className="pl-3">{res.number}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Email: </p>
              </th>
              <th>
                <p className="pl-3">{res.email}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Citizenship: </p>
              </th>
              <th>
                <p className="pl-3">{citizen}</p>
              </th>
            </tr>
          </table>
          <h3>
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Questions and Answers
            </marquee>
          </h3>
          <table className="m-3">
            <tr>
              <td>
                <p>
                  Have you recently traveled to an area with known local spread
                  of COVID-19?{' '}
                </p>
              </td>
              <td>
                <p>{res.rtravelled}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Have you come into close contact a person who has a laboratory
                  confirmed COVID-19 diagnosis?{' '}
                </p>
              </td>
              <td>
                <p>{res.closeContact}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Do you have a fever or symptoms of lower respiratory illnesses
                  such as cough, shortness of breath or difficulty breathing?{' '}
                </p>
              </td>
              <td>
                <p>{res.fever}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel a sore throat? </p>
              </td>
              <td>
                <p>{res.throat}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel fatigue? </p>
              </td>
              <td>
                <p>{res.fatigue}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel cough and sputum production? </p>
              </td>
              <td>
                <p>{res.cough}</p>
              </td>
            </tr>
          </table>
          <button onClick={()=>handleDelete(res.id)}>Delete</button>
        </div>
      );
    }

    {
      /* ----Citizenship----*/
    }

    if (i > 0 && subs < 5 && citizen == 0) {
      let citizen = 'South African citizen';
      let idstr = 'Miss';
      return (
        <div>
          <h1 className="text-center">
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Thank you {idstr} {res.Fname.toUpperCase().substr(0, 1)}. {res.Lname.toUpperCase()}
            </marquee>
          </h1>

          <table className="form-table m-3">
            <tr>
              <th>
                <p>ID Number:</p>
              </th>
              <th>
                <p className="pl-3">{res.id}</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>Temperature:</p>
              </th>
              <th>
                <p className="pl-3">{res.temp}°</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Cell Number: </p>
              </th>
              <th>
                <p className="pl-3">{res.number}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Email: </p>
              </th>
              <th>
                <p className="pl-3">{res.email}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Citizenship: </p>
              </th>
              <th>
                <p className="pl-3">{citizen}</p>
              </th>
            </tr>
          </table>
          <h3>
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Questions and Answers
            </marquee>
          </h3>
          <table className="m-3">
            <tr>
              <td>
                <p>
                  Have you recently traveled to an area with known local spread
                  of COVID-19?{' '}
                </p>
              </td>
              <td>
                <p>{res.rtravelled}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Have you come into close contact a person who has a laboratory
                  confirmed COVID-19 diagnosis?{' '}
                </p>
              </td>
              <td>
                <p>{res.closeContact}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Do you have a fever or symptoms of lower respiratory illnesses
                  such as cough, shortness of breath or difficulty breathing?{' '}
                </p>
              </td>
              <td>
                <p>{res.fever}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel a sore throat? </p>
              </td>
              <td>
                <p>{res.throat}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel fatigue? </p>
              </td>
              <td>
                <p>{res.fatigue}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel cough and sputum production? </p>
              </td>
              <td>
                <p>{res.cough}</p>
              </td>
            </tr>
          </table>
          <button onClick={()=>handleDelete(res.id)}>Delete</button>
        </div>
        
      );
    
      }

    if (i > 0 && subs > 4 && citizen == 1) {
      let citizen = 'Permanent resident';
      let idstr = 'Mr';
      return (
        <div>
          <h1 className="text-center">
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Thank you {idstr} {res.Fname.toUpperCase().substr(0, 1)}. {res.Lname.toUpperCase()}
            </marquee>
          </h1>

          <table className="form-table m-3">
            <tr>
              <th>
                <p>ID Number:</p>
              </th>
              <th>
                <p className="pl-3">{res.id}</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>Temperature:</p>
              </th>
              <th>
                <p className="pl-3">{res.temp}°</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Cell Number: </p>
              </th>
              <th>
                <p className="pl-3">{res.number}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Email: </p>
              </th>
              <th>
                <p className="pl-3">{res.email}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Citizenship: </p>
              </th>
              <th>
                <p className="pl-3">{citizen}</p>
              </th>
            </tr>
          </table>
          <h3>
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Questions and Answers
            </marquee>
          </h3>
          <table className="m-3">
            <tr>
              <td>
                <p>
                  Have you recently traveled to an area with known local spread
                  of COVID-19?{' '}
                </p>
              </td>
              <td>
                <p>{res.rtravelled}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Have you come into close contact a person who has a laboratory
                  confirmed COVID-19 diagnosis?{' '}
                </p>
              </td>
              <td>
                <p>{res.closeContact}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Do you have a fever or symptoms of lower respiratory illnesses
                  such as cough, shortness of breath or difficulty breathing?{' '}
                </p>
              </td>
              <td>
                <p>{res.fever}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel a sore throat? </p>
              </td>
              <td>
                <p>{res.throat}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel fatigue? </p>
              </td>
              <td>
                <p>{res.fatigue}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel cough and sputum production? </p>
              </td>
              <td>
                <p>{res.cough}</p>
              </td>
            </tr>
          </table>
          <button onClick={()=>handleDelete(res.id)}>Delete</button>
        </div>
      );
    }

    if (i > 0 && subs < 5 && citizen == 1) {
      let citizen = 'Permanent resident';
      let idstr = 'Miss';
      return (
        <div>
          <h1 className="text-center">
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Thank you {idstr} {res.Fname.toUpperCase().substr(0, 1)}. {res.Lname.toUpperCase()}
            </marquee>
          </h1>

          <table className="form-table m-3">
            <tr>
              <th>
                <p>ID Number:</p>
              </th>
              <th>
                <p className="pl-3">{res.id}</p>
              </th>
            </tr>
            <tr>
              <th>
                <p>Temperature:</p>
              </th>
              <th>
                <p className="pl-3">{res.temp}°</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Cell Number: </p>
              </th>
              <th>
                <p className="pl-3">{res.number}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Email: </p>
              </th>
              <th>
                <p className="pl-3">{res.email}</p>
              </th>
            </tr>

            <tr>
              <th>
                <p>Citizenship: </p>
              </th>
              <th>
                <p className="pl-3">{citizen}</p>
              </th>
            </tr>
          </table>
          <h3>
            <marquee
              scrollamount="0.5"
              direction="down"
              className="text-center"
            >
              Questions and Answers
            </marquee>
          </h3>
          <table className="m-3">
            <tr>
              <td>
                <p>
                  Have you recently traveled to an area with known local spread
                  of COVID-19?{' '}
                </p>
              </td>
              <td>
                <p>{res.rtravelled}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Have you come into close contact a person who has a laboratory
                  confirmed COVID-19 diagnosis?{' '}
                </p>
              </td>
              <td>
                <p>{res.closeContact}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>
                  Do you have a fever or symptoms of lower respiratory illnesses
                  such as cough, shortness of breath or difficulty breathing?{' '}
                </p>
              </td>
              <td>
                <p>{res.fever}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel a sore throat? </p>
              </td>
              <td>
                <p>{res.throat}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel fatigue? </p>
              </td>
              <td>
                <p>{res.fatigue}</p>
              </td>
            </tr>

            <tr>
              <td>
                <p>Do you feel cough and sputum production? </p>
              </td>
              <td>
                <p>{res.cough}</p>
              </td>
            </tr>
          </table>
          <button onClick={()=>handleDelete(res.id)}>Delete</button>
        </div>
      );
    }
  });
  return <div>{Results}</div>;
};
export default Display;
