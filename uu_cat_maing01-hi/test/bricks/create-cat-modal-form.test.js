import UU5 from "uu5g04";
import UuCat from "uu_cat_maing01-hi";

const { shallow } = UU5.Test.Tools;

describe(`UuCat.Bricks.CreateCatModalForm`, () => {
  it(`default props`, () => {
    const wrapper = shallow(<UuCat.Bricks.CreateCatModalForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
