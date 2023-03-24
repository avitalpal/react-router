import './App.css';

const LoginPage = () => {

  return (
    <div class="HomePage">
      <div>
        <div class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12 md:pl-64">
          <img src={require("./bck.svg")} alt="" class="bg-cover" width="1308" />
          <div class="absolute inset-0 bg-[url(./bck.svg)] bg-cover"></div>
          <div class="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg sm:rounded-lg sm:px-10">
            <div class="mx-auto max-w-md">
              <img src={require("./logo.png")} alt="Wiz logo" class="h-12 mx-auto" />
              <div class="divide-y divide-gray-300/50">
                <div class="space-y-6 py-8 text-base leading-7 text-gray-600 text-center font-semibold">
                  <p>Welcome to the Wiz React Router playground! <br/> Sign in on the bottom left to get started</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoginPage;