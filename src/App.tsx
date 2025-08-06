import {
  Alert,
  AppBar,
  Box,
  Button,
  Container,
  CssBaseline,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Controller, FormProvider, useForm } from "react-hook-form";

const LineItem: React.FC = ({ children }) => {
  return (
    <Box display="flex" justifyContent="space-between" p={1}>
      {children}
    </Box>
  );
};

type FormValues = {
  age: number;
  pts: number;
  satt: number;
  lmt: number;
};

const ControlledSelect: React.FC<{
  field: keyof FormValues;
  label: string;
  options: { label: string; value: any }[];
}> = ({ field, label, options }) => {
  return (
    <Controller
      name={field}
      defaultValue={""}
      rules={{ required: true }}
      render={({ field, fieldState: { error } }) => (
        <LineItem>
          <FormControl fullWidth error={!!error}>
            <InputLabel>{label}</InputLabel>
            <Select
              value={field.value}
              onChange={(e) => field.onChange(e.target.value)}
              label={label}
            >
              {options.map((opt) => {
                return (
                  <MenuItem key={opt.value} value={opt.value}>
                    {opt.label}
                  </MenuItem>
                );
              })}
            </Select>
            {!!error ? <FormHelperText>{error?.message}</FormHelperText> : null}
          </FormControl>
        </LineItem>
      )}
    />
  );
};

const ControlledInput: React.FC<{
  field: keyof FormValues;
  label: string;
}> = ({ field, label }) => {
  return (
    <Controller
      name={field}
      defaultValue={""}
      rules={{ required: true }}
      render={({ field, fieldState: { error } }) => (
        <LineItem>
          <TextField
            fullWidth
            InputLabelProps={{ shrink: true }}
            label={label}
            type="number"
            variant="outlined"
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
            error={!!error}
            helperText={error?.message}
          />
        </LineItem>
      )}
    />
  );
};

function App() {
  const methods = useForm<FormValues>({
    defaultValues: {
      age: "",
      lmt: "",
      pts: "",
      satt: "",
    } as any,
  });
  const [score, setScore] = useState<number | null>(null);
  const onSubmit = (data: FormValues) => {
    const y = -3.967-(0.082*data.age)+(0.321*data.pts)+(0.154*data.satt)+(0.846*data.lmt);
    const score = 1.0 / (1.0 + (Math.pow(2.71828 , - y)) )
    const roundedScore = Math.round(score * 100);
    setScore(roundedScore);
  };
  const reset = () => {
    methods.reset();
    setScore(null);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ACL Lyon Ortho Clinic calculator
          </Typography>
        </Toolbar>
      </AppBar>
      <FormProvider {...methods}>
        <form noValidate onSubmit={methods.handleSubmit(onSubmit)}>
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
            >
              <ControlledInput field="age" label="Age" />
              <ControlledInput
                field="pts"
                label="Posterior Tibial Slope"
              />
              <ControlledInput
                field="satt"
                label="Static Anterior Tibial Translation"
              />
              <ControlledSelect
                field="lmt"
                label="Lateral Meniscus Tear"
                options={[
                  { label: "Yes", value: 1 },
                  { label: "No", value: 0 },
                ]}
              />
              <LineItem>
                <Button type="submit" variant="contained">
                  Calcute Risk
                </Button>
                <Button color="error" onClick={reset} variant="contained">
                  Reset
                </Button>
              </LineItem>
              <LineItem>
                {!!score ? (
                  <Box display="flex" flexDirection="column"  gap={'8px'}>
                    <TextField
                      label="Risk"
                      variant="outlined"
                      value={`${score}%`}
                      InputProps={{readOnly:true, style:{fontWeight:'bold', fontSize:26}, fullWidth:true}}
                    />
                    <Alert severity={"info"}>
                      <Typography variant="h5" component="h5">
                      The patient has a <b>{score}%</b> risk of ACL reconstruction graft rupture seven years post-surgery.
                      </Typography>
                    </Alert>
                  </Box>
                ) : null}
              </LineItem>
              <i>
              This score was developed by  David Mazy, Gautier Beckers, Lucia Angelelli, Nicolas Cance and David H Dejour
              </i>
            </Paper>
          </Container>
        </form>
      </FormProvider>
    </React.Fragment>
  );
}

export default App;
