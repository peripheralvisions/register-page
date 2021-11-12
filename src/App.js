import logo from "./logo.svg";
import "./App.css";

const GoogleSvg = () => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      stroke-width="0"
      version="1.1"
      x="0px"
      y="0px"
      viewBox="0 0 48 48"
      enable-background="new 0 0 48 48"
      height="18px"
      width="18px"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#FFC107"
        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12
	c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24
	c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
      <path
        fill="#FF3D00"
        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657
	C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
      ></path>
      <path
        fill="#4CAF50"
        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36
	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
      ></path>
      <path
        fill="#1976D2"
        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571
	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
      ></path>
    </svg>
  );
};

const MicrosoftSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 21 21"
      height="18px"
      width="18px"
    >
      <path fill="#f35325" d="M0 0h10v10H0z" />
      <path fill="#81bc06" d="M11 0h10v10H11z" />
      <path fill="#05a6f0" d="M0 11h10v10H0z" />
      <path fill="#ffba08" d="M11 11h10v10H11z" />
    </svg>
  );
};

const Input = ({ placeholder = "Placeholder content  " }) => {
  return (
    <input
      className="py-2 px-4 border-2 bg-gray-50 border-gray-200 rounded-lg text-sm"
      type="text"
      placeholder={placeholder}
    />
  );
};

const Button = ({ children = "Sign up", className }) => {
  return (
    <div
      className={`text-current border inline-flex items-center justify-center rounded-md shadow-md w-full h-10 ${className}`}
    >
      <button className="flex items-center flex-row space-x-2 font-medium">
        {children}
      </button>
    </div>
  );
};

const LinkTag = ({ children }) => {
  return (
    <a className="text-current text-blue-500 cursor-pointer">{children}</a>
  );
};

const Icon = () => {};

const Form = () => {
  return (
    <div
      style={{ width: 400 }}
      className="text-center mx-auto bg-white px-8 py-8 text-gray-600"
    >
      {/* <span>Register Form</span> */}
      <div className="flex flex-col space-y-4">
        <h1 className="mb-4 font-semibold">Sign up for Your account</h1>
        <div className="flex flex-col space-y-3">
          <Input placeholder="Enter Your full name" />
          <Input placeholder="Enter Your E-mail" />
          <Input placeholder="Enter Your password" />
        </div>

        <p className="text-xs text-left">
          By signing up, you confirm that you’ve read and accepted our{" "}
          <LinkTag>User Notice</LinkTag> and <LinkTag>Privacy Policy</LinkTag>.
        </p>

        <Button
          placeholder="Sign Up"
          className="bg-blue-700 text-white  border-indigo rounded"
        />

        <span>or</span>

        <div className="flex flex-col space-y-3">
          <Button bgColor="white" textColor="black">
            <GoogleSvg />
            <span>Continue with Google</span>
          </Button>

          <Button>
            <MicrosoftSvg />
            <span>Continue with Microsoft</span>
          </Button>
        </div>

        <hr />

        <LinkTag>
          <span className="text-sm">
            Already have an Atlassian account? Log in
          </span>
        </LinkTag>
      </div>
    </div>
  );
};

function App() {
  // return <div className="App"></div>;
  return (
    <div className="bg-blue-700 h-screen flex flex-col justify-center items-center text-white">
      <div className="flex flex-col items-center">
        <img
          className="py-12 filter grayscale"
          style={{
            width: 240,
          }}
          src={logo}
          alt=""
        />
        <Form />
        <p className="text-sm w-96 text-center mt-8">
        This page is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply 
        </p>
      </div>
    </div>
  );
}

export default App;
