var _this = this;
var obj = {
    fname: "",
    age: 0,
    email: "",
    setUser: function (user) {
        _this.age = user.age;
        _this.email = user.email;
        _this.fname = user.name;
    },
    getUser: function () {
        return "name is ".concat(_this.fname, " \n age is ").concat(_this.age, "\n email is ").concat(_this.email);
    }
};
obj.setUser({ name: "rahul", age: 20, email: "rahulmoreb@gmail.com" });
console.log(obj.getUser());
