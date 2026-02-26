import SocialButton from "../../../shared/components/buttons/SocialButton";

export default function GoogleSignInButton() {
  return (
    <SocialButton
      icon={
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5"
        />
      }
    >
      Sign in with Google
    </SocialButton>
  );
}
