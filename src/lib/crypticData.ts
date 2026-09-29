import { supabase } from "./supabase";

async function getTable(table: string) {
  const { data, error } = await supabase
    .from(table)
    .select("*");

  if (error) {
    console.error(`Supabase ${table} error:`, error);
    return [];
  }

  return data ?? [];
}

export async function getLocations() {
  return getTable("locations");
}

export async function getAlerts() {
  return getTable("alerts");
}

export async function getCases() {
  return getTable("cases");
}

export async function getComplaints() {
  return getTable("complaints");
}

export async function getPredictions() {
  return getTable("predictions");
}

export async function getEvidence() {
  return getTable("evidence");
}

export async function getAuditLogs() {
  return getTable("audit_logs");
}

export async function getProfiles() {
  return getTable("profiles");
}

export async function getAllCrypticData() {
  const [
    locations,
    alerts,
    cases,
    complaints,
    predictions,
    evidence,
    auditLogs,
    profiles,
  ] = await Promise.all([
    getLocations(),
    getAlerts(),
    getCases(),
    getComplaints(),
    getPredictions(),
    getEvidence(),
    getAuditLogs(),
    getProfiles(),
  ]);

  return {
    locations,
    alerts,
    cases,
    complaints,
    predictions,
    evidence,
    auditLogs,
    profiles,
  };
}