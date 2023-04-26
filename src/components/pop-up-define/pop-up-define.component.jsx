const PopUpDefine = () => {
  return (
    <div className="pop-up">
      <form action="">
        <div>
          <label for="full-name">Nombre(s)</label>
          <input
            id="full-name"
            type="text"
            placeholder="jonh smith"
            name="full-name"
            required
          />
        </div>
      </form>
    </div>
  );
};

export default PopUpDefine;
