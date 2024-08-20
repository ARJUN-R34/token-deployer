import { Chip, Typography } from "@mui/material";
import { APP_DISPLAY_NAME, ROUTES } from "consts";
import { LogoWrapper } from "./styled";
import { useNetwork } from "lib/hooks/useNetwork";
import { useNavigatePreserveQuery } from "lib/hooks/useNavigatePreserveQuery";

export const AppLogo = () => {
  const navigate = useNavigatePreserveQuery();
  const { network } = useNetwork();
  return (
    <LogoWrapper onClick={() => navigate(ROUTES.deployer)}>
      <Typography variant="h4">{"🔥  "}{APP_DISPLAY_NAME}</Typography>
      {network === "testnet" && <Chip sx={{ ml: 1 }} label="testnet" />}
    </LogoWrapper>
  );
};
