import classNames from 'classnames';
import Dropdown from '../../../elements/Dropdown';

function Activities() {

  const render = () => {
    return (
      <div className="activities">
        <div className="flex justify-between align-center mb-20">
          <button className="button button__primary">Create activity</button>
          <Dropdown
            placeholder="Filter activities"
            width={170}
          />
        </div>
        {[1, 2, 3, 4, 5].map(e => (
          <article className="activities-post" key={e}>
            <div className="activities-post__header">
              <img
                src="https://miro.medium.com/max/785/0*8or0oFmHDRKnlETg"
                alt=""
                className="avatar avatar-medium mr-20"
              />
              <div className="flex-1">
                <h1 className="typography activities-post__header-title">
                  Realizar actividad para la casa
                </h1>
                <p className="typography typography__subtitle">
                  Yesid Manjarres - Ago 18, 2022
                </p>
              </div>
              <div className="icon-button">
                <i className="ms-Icon ms-Icon--MoreVertical" aria-hidden="true"></i>
              </div>
            </div>
            <div className="activities-post__body">
              <p className="typography typography__parraf">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate vel magnam voluptatum veritatis eius ex recusandae nulla beatae id minima facere quis illo praesentium ad, voluptas ducimus suscipit, at quidem?
              </p>
              <div className="divider mt-10 mb-10"></div>
              <div className="flex justify-end align-center">
                <p className={classNames(
                  "activities-post__status",
                  "activities-post__status-success"
                )}>
                  Submitted
                </p>
                <button className="button">Submit assignment</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    );
  };

  return render();
}

export default Activities;