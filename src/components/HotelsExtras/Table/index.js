import { useDispatch, useSelector } from "react-redux";
import extrasAction from "../../../redux/actions/extras";
import Extras from "../TableItem";
import "./styles.css";

function Table() {
  const dispatch = useDispatch();
  const { extras, isAllSelected } = useSelector(state => state.extraReducer);

  function handleChangeSelectAll() {
    dispatch(extrasAction.setIsAllSelected());
  }

  return (
    <>
      <table className="table table-striped table-hover">
        <thead className="thead-extras">
          <tr>
            <th scope="col">
              <div className="form-check mb-0">
                <input
                  className="form-check-input"
                  style={{ width: "1.2rem", height: "1.2rem" }}
                  type="checkbox"
                  name="selectAll"
                  id="selectAll"
                  onChange={handleChangeSelectAll}
                  checked={isAllSelected}
                />
              </div>
            </th>
            <th className="item-num" scope="col">
              #
            </th>
            <th scope="col">Thumb</th>
            <th scope="col">Name</th>
            <th scope="col">Status</th>
            <th scope="col">Price</th>
            <th scope="col">Translate</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {extras.map((item, idx) => (
            <Extras key={item.id} item={{ ...item, tableId: idx + 1 }} />
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Table;
